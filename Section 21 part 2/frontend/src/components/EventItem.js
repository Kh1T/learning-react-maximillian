import classes from './EventItem.module.css';

function EventItem({ event
   = {
  id: '1',
  title: 'Sample Event',
  description: 'Some sample description',
  date: '2021-05-12',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
} 
}) {
  function startDeleteHandler() {
    // ...
    
    console.log('Delete');
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href={`/events/${event.id}/edit`}>Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
