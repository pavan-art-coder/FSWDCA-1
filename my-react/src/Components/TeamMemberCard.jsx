function TeamMemberCard({name,text}){
    return(
    <>
      <div style={{border:"Solid 20px White", borderRadius:"10px" }}></div>
        <h1>TeamMemCard</h1>
        <h2>Name:{name}</h2>
        <p>JobTitle:{text}</p>
    </>
    )
}

export default TeamMemberCard;