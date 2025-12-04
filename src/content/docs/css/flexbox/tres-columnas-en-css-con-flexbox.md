---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIAAGMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr7Dvpo1TLjsV5reETTLUPGEQk2uNcM073N6yjbvyhvAiAuPib4skkgvuM81CeZiQ8Na56b1BB6avioTF%2BsyZc9eCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMtaHhS5sVyQMlbGJDKtwDWHyX88q2dH3UJvJWZFyAiSnVbLq0reYkTHUK%2BYeQ0tDqYgSNlCy55eoAXm7bdaB6KIy5ScyImnFAbVP%2FcoxnsPE6VMkyQ3CV3tfvY0MbxFB5zqoQwOb9AnYtRWnFJwFDeO0DOPYSOBH3K%2BBtnOzhNdX6j%2FPD9cOr6Ps8OM9jdJQn7Ly7X8KMpkV7Sq5smGwzlGmpf7DB7DAhWna3ICNAVmhcylhh2Gaa8T1hX2q1GWdMtsBE3k%2BuqNPG%2FREaPBV44Jxd9Geidd%2Be11Xu%2FyrDxPjtOQKHbydNHjzZKk43ZHunr4O%2FI4rKOMMPlti8wiZ4zlImAjApe8%2FNYeclFyetsfnPyD%2FGPKDNL4aQM1%2Fq9ap6zzMQHldJjpO6oY5XyFqxh2AnjZUQ5pOytvFGt9APYtwKg%2Bofcgdc5XGuewpaXqahOuvdxJmlr7W7yixEdk%2BN1KXG1zXc1UWqAa6oA2TleT59YKhXAWatXlWXgg6iu8%2FUBS3JiHMEnK9bnzuTe36mtF%2BQxFxVTL6OYp54QtML0gittzbvBRZKbmCJNZ4h8kD7GlWm%2BqGS7x6GyL6y3ie6PPNhhkvUAU82bGuMt4Nzxr34sIaokcERsApjc4Mb4GaUH%2BSMlsaWas4KMDowg%2FrGyQY6pgE7wFbybK8Ft93utVBKF8E%2Bxk4KoXRM2F7pV3QJwZo%2BaD7n06ET80edJdt%2Bpo7pyNO9Vo3Jz18nBAZlh4N%2B1VN6fZbPj9b8wQofVCcPkxCn8bUN%2Fjm3SKhBFjMQ08Hzwnk7SZl%2F0N7Et865LaT9Ewps2A8GOvxCK1764VwIjxPyDWrc7RB4y2PLxI650st43zugGqaJnPf2seJnkJ3X7y7rO8H4WK%2BL&X-Amz-Signature=ffa20c857d05db08de89f38bb39e8d4a31421e95a5abd86fc9df9616cbfd6577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIAAGMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr7Dvpo1TLjsV5reETTLUPGEQk2uNcM073N6yjbvyhvAiAuPib4skkgvuM81CeZiQ8Na56b1BB6avioTF%2BsyZc9eCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMtaHhS5sVyQMlbGJDKtwDWHyX88q2dH3UJvJWZFyAiSnVbLq0reYkTHUK%2BYeQ0tDqYgSNlCy55eoAXm7bdaB6KIy5ScyImnFAbVP%2FcoxnsPE6VMkyQ3CV3tfvY0MbxFB5zqoQwOb9AnYtRWnFJwFDeO0DOPYSOBH3K%2BBtnOzhNdX6j%2FPD9cOr6Ps8OM9jdJQn7Ly7X8KMpkV7Sq5smGwzlGmpf7DB7DAhWna3ICNAVmhcylhh2Gaa8T1hX2q1GWdMtsBE3k%2BuqNPG%2FREaPBV44Jxd9Geidd%2Be11Xu%2FyrDxPjtOQKHbydNHjzZKk43ZHunr4O%2FI4rKOMMPlti8wiZ4zlImAjApe8%2FNYeclFyetsfnPyD%2FGPKDNL4aQM1%2Fq9ap6zzMQHldJjpO6oY5XyFqxh2AnjZUQ5pOytvFGt9APYtwKg%2Bofcgdc5XGuewpaXqahOuvdxJmlr7W7yixEdk%2BN1KXG1zXc1UWqAa6oA2TleT59YKhXAWatXlWXgg6iu8%2FUBS3JiHMEnK9bnzuTe36mtF%2BQxFxVTL6OYp54QtML0gittzbvBRZKbmCJNZ4h8kD7GlWm%2BqGS7x6GyL6y3ie6PPNhhkvUAU82bGuMt4Nzxr34sIaokcERsApjc4Mb4GaUH%2BSMlsaWas4KMDowg%2FrGyQY6pgE7wFbybK8Ft93utVBKF8E%2Bxk4KoXRM2F7pV3QJwZo%2BaD7n06ET80edJdt%2Bpo7pyNO9Vo3Jz18nBAZlh4N%2B1VN6fZbPj9b8wQofVCcPkxCn8bUN%2Fjm3SKhBFjMQ08Hzwnk7SZl%2F0N7Et865LaT9Ewps2A8GOvxCK1764VwIjxPyDWrc7RB4y2PLxI650st43zugGqaJnPf2seJnkJ3X7y7rO8H4WK%2BL&X-Amz-Signature=553bbd2149d983a4b599bfbe15e736174666327b2c875c87a0ac9dae25817b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

