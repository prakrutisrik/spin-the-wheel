export default function Background() {

const stars=[...Array(80)];

return(

<div className="pixel-bg">

{stars.map((_,i)=>(

<div
className="pixel-star"
key={i}
style={{
left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`,
animationDelay:`${Math.random()*6}s`
}}
/>

))}

</div>

);

}