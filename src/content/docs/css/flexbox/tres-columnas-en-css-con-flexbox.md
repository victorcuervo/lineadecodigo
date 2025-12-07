---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SWRZUY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIMekLA1WrZU5CThO%2B0nt0ci%2BSnYg%2F6LpNKGbiKdanqAiEAumi6QPjLWUbL7wd6kRoCaBs%2B1YaO0flDtkIMFrQ6FAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHtuuQMvaVw99rZlSrcAx6Pf4yvRSNYhqHi0%2BzTrmiQJrVbRCLqFt%2FwnK%2F%2FsMuyBjBLp8DBvD1bQ44YQbnfRcYe4sI8yyTvfAlCJKmCZfR8%2FIp5BG0eZFwzBDX9NZXsWEHrcfcU%2FzK9DuB1ApQeEHhcL6kZB0MlYQK1dCgm%2BaIMY1Td%2BmU1Z2JseHWOIl7OLubRq59mWsrKTEaP76ABfQTaAvri9Es57Q%2Fp9BLWD3itNfYcDl5wkA2q7emVSS%2BkQ9EkrFtpo05jx4wDXVsoplP61FioUuXoms1V0nq3iOCvU7KOwpTST2a%2BwLqHBYxLBiJ8qFsot1Li8XCwnEIQlhY3WDZKrf03F%2BQ7pXvMI64XKPnif%2BMBvtkCSsj31ZOmPjTQNvlZmBz9d2i8%2FtCpfJTVnRJsggYDr9bpXZQW93N8CUtgWydsE0HBYkaVHpu0IChShvE5WGQrOzYrQZxLgDEc0fA9gz9lFUm460duHDsjV%2F0HxdZw3icdaBqqANMgVbQlHfn%2Bi4RUmgSMl4vnn8OR%2BW1wc%2Bn%2FNmot2NE3y%2B6iVVD5ZXQherQn0iwJmyYtJZqh9gO6M1XiiJEU0s1ctxkE4SrYeV8uPVRzUq1pomZ43y0605MJeIwIA3zwpXr2%2F%2FQhOj%2FumIw61WccMIj90skGOqUBqFoFtHoX2fH8%2BUV%2FVbaLJtgFIZPSDY6rS0Sudb7W6ymvjQgqwuPb12XxxAnvt3I0wsIZmwdF8ia90ACvyCU9vwx3GXqp569KizAVE5r8En4YQPv1cism15PItJtPCg5xhGd%2B6MfjALrWBnADOxqTDDCc0iRvEm%2F9ahuM3e1Ghdo7zCipruwcKlMiiC5ENuF4z6vy%2BS8kkHnNhSQwW2Gm48VCdui0&X-Amz-Signature=d9e1a60d28dd39c2223b2d13437ba6a5e1be3755ebc7da51af9bc926c28b505b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SWRZUY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIMekLA1WrZU5CThO%2B0nt0ci%2BSnYg%2F6LpNKGbiKdanqAiEAumi6QPjLWUbL7wd6kRoCaBs%2B1YaO0flDtkIMFrQ6FAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHtuuQMvaVw99rZlSrcAx6Pf4yvRSNYhqHi0%2BzTrmiQJrVbRCLqFt%2FwnK%2F%2FsMuyBjBLp8DBvD1bQ44YQbnfRcYe4sI8yyTvfAlCJKmCZfR8%2FIp5BG0eZFwzBDX9NZXsWEHrcfcU%2FzK9DuB1ApQeEHhcL6kZB0MlYQK1dCgm%2BaIMY1Td%2BmU1Z2JseHWOIl7OLubRq59mWsrKTEaP76ABfQTaAvri9Es57Q%2Fp9BLWD3itNfYcDl5wkA2q7emVSS%2BkQ9EkrFtpo05jx4wDXVsoplP61FioUuXoms1V0nq3iOCvU7KOwpTST2a%2BwLqHBYxLBiJ8qFsot1Li8XCwnEIQlhY3WDZKrf03F%2BQ7pXvMI64XKPnif%2BMBvtkCSsj31ZOmPjTQNvlZmBz9d2i8%2FtCpfJTVnRJsggYDr9bpXZQW93N8CUtgWydsE0HBYkaVHpu0IChShvE5WGQrOzYrQZxLgDEc0fA9gz9lFUm460duHDsjV%2F0HxdZw3icdaBqqANMgVbQlHfn%2Bi4RUmgSMl4vnn8OR%2BW1wc%2Bn%2FNmot2NE3y%2B6iVVD5ZXQherQn0iwJmyYtJZqh9gO6M1XiiJEU0s1ctxkE4SrYeV8uPVRzUq1pomZ43y0605MJeIwIA3zwpXr2%2F%2FQhOj%2FumIw61WccMIj90skGOqUBqFoFtHoX2fH8%2BUV%2FVbaLJtgFIZPSDY6rS0Sudb7W6ymvjQgqwuPb12XxxAnvt3I0wsIZmwdF8ia90ACvyCU9vwx3GXqp569KizAVE5r8En4YQPv1cism15PItJtPCg5xhGd%2B6MfjALrWBnADOxqTDDCc0iRvEm%2F9ahuM3e1Ghdo7zCipruwcKlMiiC5ENuF4z6vy%2BS8kkHnNhSQwW2Gm48VCdui0&X-Amz-Signature=a77744eb01da58b46e27f4cc00b5b740a8d8bab4158c07df69ae20c4e64f4faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

