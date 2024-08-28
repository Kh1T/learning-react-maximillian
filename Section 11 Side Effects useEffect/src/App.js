// 189: use useCallback Hook
import React, { useRef, useState, useEffect, useCallback } from "react";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc";

function App() {
  const selectedPlace = useRef(null);

  // Initialize pickedPlaces state directly from localStorage
  const [pickedPlaces, setPickedPlaces] = useState(() => {
    const storedPlaceIds =
      JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    return storedPlaceIds.map((id) =>
      AVAILABLE_PLACES.find((place) => place.id === id)
    );
  });

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Sort available places by distance when the component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      const updatedPlaces = [place, ...prevPickedPlaces];

      // Update localStorage directly when pickedPlaces changes
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify(updatedPlaces.map((place) => place.id))
      );

      return updatedPlaces;
    });
  }

  // 189 : use useCallback hook
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => {
      const updatedPlaces = prevPickedPlaces.filter(
        (place) => place.id !== selectedPlace.current
      );

      // Update localStorage directly when pickedPlaces changes
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify(updatedPlaces.map((place) => place.id))
      );

      return updatedPlaces;
    });
    // setModalIsOpen(false);
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
