---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M3YW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtXsXOowWgqfitE1Adsccc4H8OqZyMrOm4oXgF5ZdKlAIhAK33PKtsQN31UOX7vRHrZ8R5RlWC5BzmdsDwPgoHN%2BV9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWrVIJhBDCU4SXiSIq3AMg9ZBBMQxYPkSX1d9RfgTTW3GrHEXtQy3%2FdXR1Rdfk%2Bp082ZcEBHCmTYxmbmgPHPzNosALSJpcstr6tR811CVSH%2BbZiFhCOS0fv2P6XbhRhNyKY0WCcfpOc9GWNgsVrKmIua%2Bmh2ghT5A7zuJQMgoat3PJQfC%2B52ObXfzO%2F5USA%2FOYRq1cZMrMV3x5%2BWeLeqrm9dwFDX8WrntSFUNQjJAUNlC9RtbEgrQP5x3hGflrFteT10O%2Bi9l3E1Tf16Zs0dceWFVErZghmXi7rf8kMeOtd0ZUCu5WtXsx8QejcZWujg049LIw2Yg6%2BrN%2BOeH9TWiiKiOzUN8GNL7FVGYmBb0Smyiz7bapWT7Ku0JedCPvteRaVeJBrNKIOuYZGkbiPJ4d8UdTFtmWJbm4uYdcqer%2BDgQ5Q7GzTYh7nthLz%2BKOOeOUeapkw69K9j7U6PwVnebGA9q7nmozvswpcxUvN7Ay%2F7bJNVmqr9jXhIno8D3Tjnn7Sd3Kr6PStAflD9LHykpTaQCassYVKIX%2FohGlBZViSU6OTUcFgjM0KQmcaHDIRKremCL3TQYG1ZSGsgwgGMDmiJzJipIhOPeQ4%2FT0YX%2BXPVtmckayBWN5PjmuRTLyASKMTNOtiDAa7ZvmhzCAm9XJBjqkAcT4dExZh1ipBF7ADHl4tBfyqwYsTtzYEqhi%2FpTav3WL2cYeFWqbumlIWNUUDsG5UrHs7kl6P%2Bzmc2HgM3JJoM6F6DiDnVWtB0VoDhi2tkkALfR4XSS6pzXMZ3h5iSY2Y29USp9ek6VibMBZKKldjQnp%2B4NhM86CENdd8isFyD%2FwGgpqSAEcInFFcDv8tJxJbusDadFQ8edQucOv1YP%2BDCBavxRM&X-Amz-Signature=70ff1f371286386fdd28f42eaa13f5ab9263838d7626d8695a6eecf4f7842509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677M3YW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtXsXOowWgqfitE1Adsccc4H8OqZyMrOm4oXgF5ZdKlAIhAK33PKtsQN31UOX7vRHrZ8R5RlWC5BzmdsDwPgoHN%2BV9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWrVIJhBDCU4SXiSIq3AMg9ZBBMQxYPkSX1d9RfgTTW3GrHEXtQy3%2FdXR1Rdfk%2Bp082ZcEBHCmTYxmbmgPHPzNosALSJpcstr6tR811CVSH%2BbZiFhCOS0fv2P6XbhRhNyKY0WCcfpOc9GWNgsVrKmIua%2Bmh2ghT5A7zuJQMgoat3PJQfC%2B52ObXfzO%2F5USA%2FOYRq1cZMrMV3x5%2BWeLeqrm9dwFDX8WrntSFUNQjJAUNlC9RtbEgrQP5x3hGflrFteT10O%2Bi9l3E1Tf16Zs0dceWFVErZghmXi7rf8kMeOtd0ZUCu5WtXsx8QejcZWujg049LIw2Yg6%2BrN%2BOeH9TWiiKiOzUN8GNL7FVGYmBb0Smyiz7bapWT7Ku0JedCPvteRaVeJBrNKIOuYZGkbiPJ4d8UdTFtmWJbm4uYdcqer%2BDgQ5Q7GzTYh7nthLz%2BKOOeOUeapkw69K9j7U6PwVnebGA9q7nmozvswpcxUvN7Ay%2F7bJNVmqr9jXhIno8D3Tjnn7Sd3Kr6PStAflD9LHykpTaQCassYVKIX%2FohGlBZViSU6OTUcFgjM0KQmcaHDIRKremCL3TQYG1ZSGsgwgGMDmiJzJipIhOPeQ4%2FT0YX%2BXPVtmckayBWN5PjmuRTLyASKMTNOtiDAa7ZvmhzCAm9XJBjqkAcT4dExZh1ipBF7ADHl4tBfyqwYsTtzYEqhi%2FpTav3WL2cYeFWqbumlIWNUUDsG5UrHs7kl6P%2Bzmc2HgM3JJoM6F6DiDnVWtB0VoDhi2tkkALfR4XSS6pzXMZ3h5iSY2Y29USp9ek6VibMBZKKldjQnp%2B4NhM86CENdd8isFyD%2FwGgpqSAEcInFFcDv8tJxJbusDadFQ8edQucOv1YP%2BDCBavxRM&X-Amz-Signature=6056af4687b2764598caaec5dafbecbcde8e6ac825799fc47fbde37932d8852f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

