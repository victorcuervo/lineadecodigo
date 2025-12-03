---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HHJ7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDoEOYyJTMfa9pja0hIV0htGnWI3te2VeJyQ00oY%2BcEsQIgdselzFOJon9idsVQMfDNqcLmKBD6PiD47VTGXCHUw0Eq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDClmVNEeNzhK2Sj36CrcAwXC4iu6rQUXEZE7jVsSUjjTKRrJCm6vCH2MX6Lk%2BDipO1hn%2BDW5zUh7EvIR7l4k7D1Yz6mjGtJQdqfUqrzr6bY1jboRJd2h5zOdtGTT3sAgVO4Nbnl0qlEoIG9cWxjHshOv%2FcwB%2B%2B7r0eiitoSzR3%2BO81B6VAmZ%2FMhayHs9rQVSDltzU5IN0uR1cycIW9hhS99XLRqkOiAwi1f3Ap4DmhFh4M5w76FTX57ZGJAuC4deVhH3F1u7k1IxYDFNdPhFwkgLUQdcFtD6qsYssMXl3hVSm%2FXt6VWotowqcJ4zsIZMKlPzQg%2Brl47xIy5SeCqcshsVfmrITFbncAUT94gPKpAyXrYMjHay7Ou0XoZnBNVS8Py37%2BEnUH%2Fq1NZCKY887kvX8MdXLx%2F%2BAFI2mzhrex%2F9tW4kiUtKV3Hg6ZUtbKEZBkLPyi4FMiJVclTv%2F9QYoEl6CeAX6Vlh8arjsuaCo2%2Flht14AMX5uDo4Sm1P%2F9mEvWtPuyIpWnVn9woEsW3QoA%2FHhjmz7WbB%2Bt%2Fl7OPBLgwpKuqjyhsJ71mzaJmM8ESGog72GYFRqmG0hJbnpju6yNMxELwXE7Yg757M93ASigxdMSKFN%2BVQahOT9WycL35wREYrYFYl2XS9fkInMNr%2FvckGOqUBlzu%2FqfoPDPEZkEzFmmMAyDWpPeDCFgvMleK9Em7bI1ry1%2BS2EQBwa%2F50BXysQ%2BIOzlM3RxDUqO9b%2BfdJHW6GI7CjWc8r9JN8bSX0NFcMloBDx8YVTS6AFjCIwK3oBB9GBBLMEZ2ioAcK%2FPFkA0fi9F%2B1l7nYlSvQW7r95G1vOefOIEFHtKwmreu8WQvVbnHlTKvK6YKe6Bqu8JwTlnPehLBa3W03&X-Amz-Signature=d8658064ca01a531fcf061573ed0a49853403185b0b4b8b6900cecea94851be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3HHJ7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDoEOYyJTMfa9pja0hIV0htGnWI3te2VeJyQ00oY%2BcEsQIgdselzFOJon9idsVQMfDNqcLmKBD6PiD47VTGXCHUw0Eq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDClmVNEeNzhK2Sj36CrcAwXC4iu6rQUXEZE7jVsSUjjTKRrJCm6vCH2MX6Lk%2BDipO1hn%2BDW5zUh7EvIR7l4k7D1Yz6mjGtJQdqfUqrzr6bY1jboRJd2h5zOdtGTT3sAgVO4Nbnl0qlEoIG9cWxjHshOv%2FcwB%2B%2B7r0eiitoSzR3%2BO81B6VAmZ%2FMhayHs9rQVSDltzU5IN0uR1cycIW9hhS99XLRqkOiAwi1f3Ap4DmhFh4M5w76FTX57ZGJAuC4deVhH3F1u7k1IxYDFNdPhFwkgLUQdcFtD6qsYssMXl3hVSm%2FXt6VWotowqcJ4zsIZMKlPzQg%2Brl47xIy5SeCqcshsVfmrITFbncAUT94gPKpAyXrYMjHay7Ou0XoZnBNVS8Py37%2BEnUH%2Fq1NZCKY887kvX8MdXLx%2F%2BAFI2mzhrex%2F9tW4kiUtKV3Hg6ZUtbKEZBkLPyi4FMiJVclTv%2F9QYoEl6CeAX6Vlh8arjsuaCo2%2Flht14AMX5uDo4Sm1P%2F9mEvWtPuyIpWnVn9woEsW3QoA%2FHhjmz7WbB%2Bt%2Fl7OPBLgwpKuqjyhsJ71mzaJmM8ESGog72GYFRqmG0hJbnpju6yNMxELwXE7Yg757M93ASigxdMSKFN%2BVQahOT9WycL35wREYrYFYl2XS9fkInMNr%2FvckGOqUBlzu%2FqfoPDPEZkEzFmmMAyDWpPeDCFgvMleK9Em7bI1ry1%2BS2EQBwa%2F50BXysQ%2BIOzlM3RxDUqO9b%2BfdJHW6GI7CjWc8r9JN8bSX0NFcMloBDx8YVTS6AFjCIwK3oBB9GBBLMEZ2ioAcK%2FPFkA0fi9F%2B1l7nYlSvQW7r95G1vOefOIEFHtKwmreu8WQvVbnHlTKvK6YKe6Bqu8JwTlnPehLBa3W03&X-Amz-Signature=6e1c548c86e6c21aef7a67409f2763279387bcc14fcd8690247c24a1eb675701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

