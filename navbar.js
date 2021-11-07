function navbar(){
    return ` <nav>
    <ul>
    <li><input type="text" id="search" placeholder="Search here" oninput=debounce(inp,1000)">
    <button id="btn">Search </button></li>
    <li  class="active"><a href="index.html" > Home</a></li>
       
      
        <li><a href="receipe.html">Receipe of the day</a></li>
        <li><a href="latest.html">Latest Receipe</a></li>
      
       </ul>
  

</nav>`
}

export default navbar;
