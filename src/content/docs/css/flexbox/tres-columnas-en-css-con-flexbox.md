---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSIZFMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHw8fEVl6NnODoQi97uVYJwH09nzr93ZBoqAXGdcm%2BrQIgZ3OFhb9zQ2t2dgb0GUpTOpGgP5RgC%2Fci5oH7BrlOUSQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDAONDlLfdspgkfgYCrcA%2BBZksGNVl3EcA5kkMSMnjXZq%2B8akpp%2FOuXptjLcsioP8GWo%2FmvccK%2BL5h21ST9uCsR%2F%2FPF2P4guAJIvm%2FsOiiA4I9UAqBJkMpq0u3jKZFw90MTavn5vILZqhlGWEN7qwbAQLgsymY34cjmZrFVGuLRfoMfB1ncCAT4WJ%2FZsN0xS6mAxcDsh67oz7zIHr9BcGUrr7RaKWTwX3eeb%2FRKdveZyFPfAowJt9W5PMT8PoLAfi5Pdqp4M8biEv%2Br1AMvbIa0O5qfWGGDVdbKmAAXqYKPUnA5UavW5nD9rAgqJpzLVJgAobkRytp4x8EEetpk9NvOVL2HmYsNbpcTVTpVKy3qlNlS3NABXI4ufeICsGftM5gdj2H9Pg5BfaqP%2F2I4CvYU5jyzf8swkQpPcGMOVkJDLKUQaEyhhFpMD7gUdPI4oRS4uV3mJbSrg%2BESMZs6%2BBRzz7yrE5LMIg5Nys%2Bks09aLoyC0f0AHG5jVnOS9K6kM3uQ46OsVGsUKmp7YUt%2BBvpyRRZb1kK1FE5FTo5AdKNEKV91%2FgWirLxiKtutCWq0PFR1qByUSFFq7Cwb4QnQ9%2FA%2Fj1PsE5Yb1p4D0Vir9YZykKkE9Ko3UTNV2IGBsbuDnGmD7c8N9C3ZtNKeNMMeQzckGOqUBGoIaZyuTFLiY4a6hAI5aOuKJojzBdfbI6lO93zO6yXIxqeAY7YtotUKA%2BLsBiB2GbiAe6M0FmbRn4g9CbIyhEBx1kR%2FkiyKwXjd%2F%2FHX9RyUNbgbeGk%2BZ77ZMteDkyL6c10dKSfU%2BTOf6ebtEgTKoeEJTfWuEzWqfHy9%2F8UKBzAb1ihzb98t0nkOHx3LTDleGeyBI5Is36XBRGz61Jz2nwPFSCO4D&X-Amz-Signature=5c1efb066286bb91537b233b893de5bbc88b51b025f90b4e53e5d0d0d59a44a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSIZFMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHw8fEVl6NnODoQi97uVYJwH09nzr93ZBoqAXGdcm%2BrQIgZ3OFhb9zQ2t2dgb0GUpTOpGgP5RgC%2Fci5oH7BrlOUSQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDAONDlLfdspgkfgYCrcA%2BBZksGNVl3EcA5kkMSMnjXZq%2B8akpp%2FOuXptjLcsioP8GWo%2FmvccK%2BL5h21ST9uCsR%2F%2FPF2P4guAJIvm%2FsOiiA4I9UAqBJkMpq0u3jKZFw90MTavn5vILZqhlGWEN7qwbAQLgsymY34cjmZrFVGuLRfoMfB1ncCAT4WJ%2FZsN0xS6mAxcDsh67oz7zIHr9BcGUrr7RaKWTwX3eeb%2FRKdveZyFPfAowJt9W5PMT8PoLAfi5Pdqp4M8biEv%2Br1AMvbIa0O5qfWGGDVdbKmAAXqYKPUnA5UavW5nD9rAgqJpzLVJgAobkRytp4x8EEetpk9NvOVL2HmYsNbpcTVTpVKy3qlNlS3NABXI4ufeICsGftM5gdj2H9Pg5BfaqP%2F2I4CvYU5jyzf8swkQpPcGMOVkJDLKUQaEyhhFpMD7gUdPI4oRS4uV3mJbSrg%2BESMZs6%2BBRzz7yrE5LMIg5Nys%2Bks09aLoyC0f0AHG5jVnOS9K6kM3uQ46OsVGsUKmp7YUt%2BBvpyRRZb1kK1FE5FTo5AdKNEKV91%2FgWirLxiKtutCWq0PFR1qByUSFFq7Cwb4QnQ9%2FA%2Fj1PsE5Yb1p4D0Vir9YZykKkE9Ko3UTNV2IGBsbuDnGmD7c8N9C3ZtNKeNMMeQzckGOqUBGoIaZyuTFLiY4a6hAI5aOuKJojzBdfbI6lO93zO6yXIxqeAY7YtotUKA%2BLsBiB2GbiAe6M0FmbRn4g9CbIyhEBx1kR%2FkiyKwXjd%2F%2FHX9RyUNbgbeGk%2BZ77ZMteDkyL6c10dKSfU%2BTOf6ebtEgTKoeEJTfWuEzWqfHy9%2F8UKBzAb1ihzb98t0nkOHx3LTDleGeyBI5Is36XBRGz61Jz2nwPFSCO4D&X-Amz-Signature=4e5db41f558fe249a7e72fd66bb7516c977c0ee6e68d346cc0dc016312e0d90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

