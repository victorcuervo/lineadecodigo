---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHKDASN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJduKVR8MfRmW4%2BZeSeSETV6oQ%2F%2B6Kvt8kOCZPLTDkKAiEAu01uFbI8Akn6GDgmGyaCvpBMmkxMemkzR%2FD%2FjUgwAvoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERKPqvljThXhCDkMyrcAz8syWmYoY6cyXrYAyMowJxDgdvNCCBwAvJClav7d1dsFJqiukNzj4vXYpLnxcw9YCf0gPGSU91sQz5hpngDuQktWWGpmEFt3w28fmvOyjVLQiFNinZVII95I%2Fo79aJXaCuVEuPceQcSwPZebI1dfAmOq9Jiucyd9ZJ1g9TMVUFoy%2B%2F9r68vjTLlWX6Z7z1dXzgSa%2BvLzOre7gnkXunuO7IVQBzGJkXCqGTuSW41kjFucCySm7BuVyUO%2BuQzQ0BYomTMkxONCZJDnOBzTd1WPr1xNjfXng37xqGDo4ltqQ6CeDXKHlh7Fww8U4wDZMcm%2FCjBgiTDlVUwXUwqCRi8AjHujztth6H6PttOUMRUq3Nsiw%2BY9IsKv%2F3TtAKgDXn%2BlIMYLwaZyul9rIXRiD3%2BJQ7u66LoRdt8kB0YwG0l0kRtnebyHQ0U%2BaTxsGIULWjiTWM0w8%2F2humPjX%2FVLWFKalASWGVMCEDRVHVJUQ%2B0aFM8I1QvszlpO3zdk4HumwmlwN6LQNjzhAkI9EsRFk%2F74SWJx7ELMrs9CS5IGgzZxYFwJtvQfQRzORz4R8ZzCPkn81Jsf0Y9nRYWqRktN%2FoTjdHpQwrjV5osz1%2FlzLmlwVdvQr44eRCSwZQGxLN7MLzy3ckGOqUBGTBlGYWSoiTsyizBLgJ60dU0uOPDly61slRLOzUa3ubN2MCSCWW5J6GmW02mjcYsujYI21N3hK5cH2LBbF8kENdOe7rS45h%2FqNF0WrtcLZCAdULhrDl1y%2BvEjcs%2BSKLih42e9Y4tLBJ3UnikPZAqQvOLNUyqnwyNfKVdPQ2UWSM9AKKQIjth4AJlXvQT%2FjFJGLHQxvTAlNalMx%2BAOMyTq0xoyu03&X-Amz-Signature=38b3e4f5adc8b7fc0ba6927808475e5fc30178b7e9f5560361f81888fdbf65b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHKDASN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJduKVR8MfRmW4%2BZeSeSETV6oQ%2F%2B6Kvt8kOCZPLTDkKAiEAu01uFbI8Akn6GDgmGyaCvpBMmkxMemkzR%2FD%2FjUgwAvoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERKPqvljThXhCDkMyrcAz8syWmYoY6cyXrYAyMowJxDgdvNCCBwAvJClav7d1dsFJqiukNzj4vXYpLnxcw9YCf0gPGSU91sQz5hpngDuQktWWGpmEFt3w28fmvOyjVLQiFNinZVII95I%2Fo79aJXaCuVEuPceQcSwPZebI1dfAmOq9Jiucyd9ZJ1g9TMVUFoy%2B%2F9r68vjTLlWX6Z7z1dXzgSa%2BvLzOre7gnkXunuO7IVQBzGJkXCqGTuSW41kjFucCySm7BuVyUO%2BuQzQ0BYomTMkxONCZJDnOBzTd1WPr1xNjfXng37xqGDo4ltqQ6CeDXKHlh7Fww8U4wDZMcm%2FCjBgiTDlVUwXUwqCRi8AjHujztth6H6PttOUMRUq3Nsiw%2BY9IsKv%2F3TtAKgDXn%2BlIMYLwaZyul9rIXRiD3%2BJQ7u66LoRdt8kB0YwG0l0kRtnebyHQ0U%2BaTxsGIULWjiTWM0w8%2F2humPjX%2FVLWFKalASWGVMCEDRVHVJUQ%2B0aFM8I1QvszlpO3zdk4HumwmlwN6LQNjzhAkI9EsRFk%2F74SWJx7ELMrs9CS5IGgzZxYFwJtvQfQRzORz4R8ZzCPkn81Jsf0Y9nRYWqRktN%2FoTjdHpQwrjV5osz1%2FlzLmlwVdvQr44eRCSwZQGxLN7MLzy3ckGOqUBGTBlGYWSoiTsyizBLgJ60dU0uOPDly61slRLOzUa3ubN2MCSCWW5J6GmW02mjcYsujYI21N3hK5cH2LBbF8kENdOe7rS45h%2FqNF0WrtcLZCAdULhrDl1y%2BvEjcs%2BSKLih42e9Y4tLBJ3UnikPZAqQvOLNUyqnwyNfKVdPQ2UWSM9AKKQIjth4AJlXvQT%2FjFJGLHQxvTAlNalMx%2BAOMyTq0xoyu03&X-Amz-Signature=e4ebd94b7a60aa4f0840984aa776e10be9fd22b000bdfa6e7da2b0608221aaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

