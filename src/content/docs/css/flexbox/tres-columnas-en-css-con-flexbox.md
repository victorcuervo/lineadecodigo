---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQU2QUA4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDDvauXBsbQXk%2FFSJfGURaLCENNO7cZQPVmV01IxrUIAiEAy5bNyqKe%2Fr%2BfIaBdSacFzFVWdHCZZ89ZfZgVzM%2B%2B9d8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDATHIqNw7TzZfPlp6yrcA2VeJQnxLbrG%2FnXvgHpZi3YaMonDikNpDILAXFprer87OVMeWlCIjohowKQz3PjajeSv8zRrGtAG3v6lQCRAL3Zg7u3NMjoOilEsJNiOD8iFGiw4MkIi82SKg8OoycWVpunYSlG7GsmiotL4tzqoWwBV%2B8iDjSQxy6zZ91aQdJngyPTRndj6ek14BPH9T6IReag8JO2cJ9BXlIcznxXcmQsjaTRTWXdMy211S9bvGmF3bpNLNT23nQBkR6ZE3PLs1aKLd2xWw2HicJDsn6nq5eYr%2FV8I7h1Tz1S9XyU5iozW9ZytpwX0kLsgieo%2B0bcco1tfwvxWH0y%2BFedeTv0doVdVUipd14Hz8XTi3G1rF9Q7zZ%2B58vP4Oi%2BM%2Ff6mTZINJvm%2FSj9xDNqJYG%2B%2BJ5fIoj%2Fi6c0FGel5UeT4PoF36QAeYLgOQT0WmMI3auT56Qr6Wptzn6ddjdJeDA9RnkJXFeES9%2B%2F1zEwyHtXDbWiv5XU6JIDS0hWOPv5Y6pvEFmTnmzWAp5SaHqzA2WIb9lSH8STD5SFCVRh4436Q4GnQ1eFs6KvBBxHCd5c1av7TJoQf69LSWw84mS%2FH9e2QVkuqMmbAxH2XJ9ZJ8JAVwxYSGR8TLye7DMrAynIaq1icMLqK0MkGOqUB%2FHbKqu%2FFu5p7%2BoB7oJH7SzfVUa8HbT0EAKz09iDEgsORJgGerUP5Ebl2EjiA21XWoCoFGLsMCB6U9plErtlB8N%2F%2FZNn38x7qiLcrBBjeHFL3XlNFeNWgplS%2BFFVwNr%2Fa%2FVY%2BZQmaL8P%2Bx6WD5WZhhpaG9IKRboJq3DqtMz2zVJuC8lEufL%2FK97ACSKaM%2FXeaTB1iMbX%2BWgv4snR2jU2lhMzCOBtV&X-Amz-Signature=f80f728ea1f949a091d616da7992d5f4e9cb46b897eb8a01fbe170977bbb2a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQU2QUA4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDDvauXBsbQXk%2FFSJfGURaLCENNO7cZQPVmV01IxrUIAiEAy5bNyqKe%2Fr%2BfIaBdSacFzFVWdHCZZ89ZfZgVzM%2B%2B9d8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDATHIqNw7TzZfPlp6yrcA2VeJQnxLbrG%2FnXvgHpZi3YaMonDikNpDILAXFprer87OVMeWlCIjohowKQz3PjajeSv8zRrGtAG3v6lQCRAL3Zg7u3NMjoOilEsJNiOD8iFGiw4MkIi82SKg8OoycWVpunYSlG7GsmiotL4tzqoWwBV%2B8iDjSQxy6zZ91aQdJngyPTRndj6ek14BPH9T6IReag8JO2cJ9BXlIcznxXcmQsjaTRTWXdMy211S9bvGmF3bpNLNT23nQBkR6ZE3PLs1aKLd2xWw2HicJDsn6nq5eYr%2FV8I7h1Tz1S9XyU5iozW9ZytpwX0kLsgieo%2B0bcco1tfwvxWH0y%2BFedeTv0doVdVUipd14Hz8XTi3G1rF9Q7zZ%2B58vP4Oi%2BM%2Ff6mTZINJvm%2FSj9xDNqJYG%2B%2BJ5fIoj%2Fi6c0FGel5UeT4PoF36QAeYLgOQT0WmMI3auT56Qr6Wptzn6ddjdJeDA9RnkJXFeES9%2B%2F1zEwyHtXDbWiv5XU6JIDS0hWOPv5Y6pvEFmTnmzWAp5SaHqzA2WIb9lSH8STD5SFCVRh4436Q4GnQ1eFs6KvBBxHCd5c1av7TJoQf69LSWw84mS%2FH9e2QVkuqMmbAxH2XJ9ZJ8JAVwxYSGR8TLye7DMrAynIaq1icMLqK0MkGOqUB%2FHbKqu%2FFu5p7%2BoB7oJH7SzfVUa8HbT0EAKz09iDEgsORJgGerUP5Ebl2EjiA21XWoCoFGLsMCB6U9plErtlB8N%2F%2FZNn38x7qiLcrBBjeHFL3XlNFeNWgplS%2BFFVwNr%2Fa%2FVY%2BZQmaL8P%2Bx6WD5WZhhpaG9IKRboJq3DqtMz2zVJuC8lEufL%2FK97ACSKaM%2FXeaTB1iMbX%2BWgv4snR2jU2lhMzCOBtV&X-Amz-Signature=ad062fa4898460b4d5388c36e0b56482e22e18a818863d51b132be3dc55daed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

