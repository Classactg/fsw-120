const BadgeCard = ({
    index,
    firstName,
    lastName,
    email,
    placeOfBirth,
    phoneNumber,
    favoriteFood,
    textarea,
    handleDelete
   
}) => {
    return(
        <div>
            <h2>BadgeCard</h2>
            <h3>{'Name:'}{firstName}{lastName}</h3>
            <h3>{'Email:'}{email}</h3>
            <h3>{'Place Of Birth:'}{placeOfBirth}</h3>
            <h3>{'Phone Number:'}{phoneNumber}</h3>
            <h3>{'Favorite Food:'}{favoriteFood}</h3>
            <textarea>{textarea}</textarea>
            <button onClick={()=> HandleDelete(index)}>Delete this one</button>
        </div>
    )
}
export default BadgeCard