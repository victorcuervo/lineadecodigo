---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVQ6U5D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgk2Ee3tTzjFMXhor3S4Lkm%2BzDpez9nxL6KvobakfQWAiA70ICwv%2BoA6NedNJ%2BThncfJO%2FNekQj7oPhAjPPZSEqZCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMZmbn15%2F%2F6WDezg2KKtwD071J9irU3DBOGEkVEVF9fjoDu2F2NOPHWhaxyDFsCi16c2VFFDlp4v2bOkRxoihFL%2FUuRIU3OqVMluo7L6ShcKugRRFFe8aJEPWhQha%2BQ1A5oLEWR2tupdZbRg8QzWRRXSNpVJd62QyslasWarIGkVGmpJVa9D3lhlg%2FFas9O1EFsVRUTS6XiQVB0fY0VT2vnKOJvV11stmhjAAiY6KdloFRzV%2F2xo38PPh1xYExYY4s3wIKlGesyW95xa1nyBV7gdkSonBjiZmZUtwdzi3N1wkOBNth9izlO3xgQG36VF5ouKyGo9Si4DCB0JvSGr8QvxfxO%2F2YVcLlRrHPLlPhq0kOyyMERR2OqUR1fpfiLz657zm78C6YM04Hetn%2BZmuuy5gDtfkuiVaTag7bsBrroDDNZbdVEnrVhmeuPJlgdW3jOsNRro6nGKyfeCR8%2FrmG7YDkppL3NQEdBIxoWQX2b8clKEdVDF8OHuRAXiQfutHhplg%2Bf1n1v5T8hoHo%2F74Om82ijZYIkwDmltjcEYwDVuIzg5put6U%2BYlpQJQ0Khb1IagLapgEigcJ0zUQTKLoQ9EJrPqXPKXoCj4uyXiiBEc1GjPKQJVJMsYpVyTKi81Yfo6sRv06ao9uS2LwwmsvEyQY6pgFfyY4cRX4UcbFaKA%2F4GfhZmPnmDtJn8o7hnSt3DZ221frU0I6Hj7MPOuugHIpBHV5EjOJjrwFji063mxUgmsjKisIqcZyk6ZuSvgCiWDEEAveK3QXZwme3cXaC4xGTaCUqBVq7udKc%2FkRgxORc3dtVAHlQ2x%2FY1aVJMtF6KLumsFvr%2FZC9gaby8qIfS1mKRKIJvi0MhRqBLldWspco0NDN3nrzKwOf&X-Amz-Signature=a03b17416d0a29a45cdafdedfa60116e2ffaae30b4cedd9fb49bb708070e6499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVQ6U5D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFgk2Ee3tTzjFMXhor3S4Lkm%2BzDpez9nxL6KvobakfQWAiA70ICwv%2BoA6NedNJ%2BThncfJO%2FNekQj7oPhAjPPZSEqZCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMZmbn15%2F%2F6WDezg2KKtwD071J9irU3DBOGEkVEVF9fjoDu2F2NOPHWhaxyDFsCi16c2VFFDlp4v2bOkRxoihFL%2FUuRIU3OqVMluo7L6ShcKugRRFFe8aJEPWhQha%2BQ1A5oLEWR2tupdZbRg8QzWRRXSNpVJd62QyslasWarIGkVGmpJVa9D3lhlg%2FFas9O1EFsVRUTS6XiQVB0fY0VT2vnKOJvV11stmhjAAiY6KdloFRzV%2F2xo38PPh1xYExYY4s3wIKlGesyW95xa1nyBV7gdkSonBjiZmZUtwdzi3N1wkOBNth9izlO3xgQG36VF5ouKyGo9Si4DCB0JvSGr8QvxfxO%2F2YVcLlRrHPLlPhq0kOyyMERR2OqUR1fpfiLz657zm78C6YM04Hetn%2BZmuuy5gDtfkuiVaTag7bsBrroDDNZbdVEnrVhmeuPJlgdW3jOsNRro6nGKyfeCR8%2FrmG7YDkppL3NQEdBIxoWQX2b8clKEdVDF8OHuRAXiQfutHhplg%2Bf1n1v5T8hoHo%2F74Om82ijZYIkwDmltjcEYwDVuIzg5put6U%2BYlpQJQ0Khb1IagLapgEigcJ0zUQTKLoQ9EJrPqXPKXoCj4uyXiiBEc1GjPKQJVJMsYpVyTKi81Yfo6sRv06ao9uS2LwwmsvEyQY6pgFfyY4cRX4UcbFaKA%2F4GfhZmPnmDtJn8o7hnSt3DZ221frU0I6Hj7MPOuugHIpBHV5EjOJjrwFji063mxUgmsjKisIqcZyk6ZuSvgCiWDEEAveK3QXZwme3cXaC4xGTaCUqBVq7udKc%2FkRgxORc3dtVAHlQ2x%2FY1aVJMtF6KLumsFvr%2FZC9gaby8qIfS1mKRKIJvi0MhRqBLldWspco0NDN3nrzKwOf&X-Amz-Signature=d9617225c67d716ca29ea67f628d1234cf4a104385a7bdaf7af430bd5d6daf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

