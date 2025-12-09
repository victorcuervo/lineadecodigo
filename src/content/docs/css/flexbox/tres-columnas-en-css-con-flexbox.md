---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y47L3RZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEItWL97UIgtBLq0JcntD9R4hInReV4jmC%2BWEad9XUs2AiAUjsZKqAsDkfi1jov3Qtcy3jTLFt5yzUfCnL4XRMe3ECqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1jHvtvpTn7H%2BTE0DKtwDb056NDVMJmkm05zdljQuXtPDnCZQR5oEqhna3VCs9VONII9dpFJykmQr5JFPJJfhyqes%2Ft6K1fMFhdlCcwHuxZC9HAVi4ilYXjkuVWkbwTzE59m40PuyI1AhAAlgTmPs3MLQvAJHhXZLnNZSIfCmuK%2FQbPeYwLLOQaZ4jpVRDvamJ1DcrKTdfhcpjajJYdcpnwk%2FB9raV4LvFgwNM2qBAbPnn4iRM4%2BpmCjVYhjAYBrqRL%2BhIF7hUYXZ7jyqJReTXTVVZzEzNDe7yf3BDbAqqwaWblhK1Ot4dDuBOpYjFR7%2Be9ikNyBNqhrrwGfkSISEEH1OpuJgHQpiqRXI4unVt73q4ka840Tz6R7gYDMqfrR0rLAP3tbsA4GyfLPzqbwSKNHRo90HkkOLxnjEiUBA13Z9IzToUmvb66qk8hf5rkKLbVbjtXZteXJ4QQIq2DkCl3ClKZxUl3QUShXjKCWen4%2FSDLR1ZK0kVsIWncvtq3R8HcHARIsANZghVgohM6Bbom0syGuJ4AOUy9maPbpRpecoqKJBak6HW0iRTllqI2pPu1sHoK5o19UNjB8EfzCBfvkZaAg1EilZdVfN4cEZi7FljaIda9LybeZsIWJCDW1pI86yCY7OMPxkww0wkMPdyQY6pgGvo3U7TV6fRZ9P7mek8Xmaxb%2Fliq2drfWXGgjdgqqNY3wsfAxoUVyaOj%2BWWMrqvyjzTCa5KswR%2BtlkNqkLi8exBFokLGJj3wH0xibcVhc9mKLj%2BRRpgFQsLKT9kEgg%2BelMrlmK4RyQVVukGV6QDZZKdHKb4T7AT7gDAPgEn5tMeHugMRVdctyl7%2BgEtQVcEGPiMVn34nphRubrvnt6co2tBuwydDGa&X-Amz-Signature=bfce555c87da20f5a5759a3aaa3444fa9ff8b00c050cfe2e937459a0eb11cac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y47L3RZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEItWL97UIgtBLq0JcntD9R4hInReV4jmC%2BWEad9XUs2AiAUjsZKqAsDkfi1jov3Qtcy3jTLFt5yzUfCnL4XRMe3ECqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1jHvtvpTn7H%2BTE0DKtwDb056NDVMJmkm05zdljQuXtPDnCZQR5oEqhna3VCs9VONII9dpFJykmQr5JFPJJfhyqes%2Ft6K1fMFhdlCcwHuxZC9HAVi4ilYXjkuVWkbwTzE59m40PuyI1AhAAlgTmPs3MLQvAJHhXZLnNZSIfCmuK%2FQbPeYwLLOQaZ4jpVRDvamJ1DcrKTdfhcpjajJYdcpnwk%2FB9raV4LvFgwNM2qBAbPnn4iRM4%2BpmCjVYhjAYBrqRL%2BhIF7hUYXZ7jyqJReTXTVVZzEzNDe7yf3BDbAqqwaWblhK1Ot4dDuBOpYjFR7%2Be9ikNyBNqhrrwGfkSISEEH1OpuJgHQpiqRXI4unVt73q4ka840Tz6R7gYDMqfrR0rLAP3tbsA4GyfLPzqbwSKNHRo90HkkOLxnjEiUBA13Z9IzToUmvb66qk8hf5rkKLbVbjtXZteXJ4QQIq2DkCl3ClKZxUl3QUShXjKCWen4%2FSDLR1ZK0kVsIWncvtq3R8HcHARIsANZghVgohM6Bbom0syGuJ4AOUy9maPbpRpecoqKJBak6HW0iRTllqI2pPu1sHoK5o19UNjB8EfzCBfvkZaAg1EilZdVfN4cEZi7FljaIda9LybeZsIWJCDW1pI86yCY7OMPxkww0wkMPdyQY6pgGvo3U7TV6fRZ9P7mek8Xmaxb%2Fliq2drfWXGgjdgqqNY3wsfAxoUVyaOj%2BWWMrqvyjzTCa5KswR%2BtlkNqkLi8exBFokLGJj3wH0xibcVhc9mKLj%2BRRpgFQsLKT9kEgg%2BelMrlmK4RyQVVukGV6QDZZKdHKb4T7AT7gDAPgEn5tMeHugMRVdctyl7%2BgEtQVcEGPiMVn34nphRubrvnt6co2tBuwydDGa&X-Amz-Signature=ccd576de460988b9ef2e933b7638a4b166518cbd8aac9613f9c714ec0e0aef56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

