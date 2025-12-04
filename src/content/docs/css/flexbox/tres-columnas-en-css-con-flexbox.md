---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RYVWI4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD4wikJ%2BIGWDbADIyzFN6CXd%2Fatea6sp4fvS3uCAew4MwIhAN%2FwqQIlDs%2BUo3D2iFspwMaivhpcrUUnFpIzvcMTHecuKv8DCEEQABoMNjM3NDIzMTgzODA1IgyQvRjifhCxqYgxJXQq3ANe8P2fOYc1A3qVA02hIA%2BdSyS84W1OMHCmDhcGYWb9cHQUi8y1TO1W%2B0s4ZZPiVemm98b%2BRGMZIkSM%2F78PHtdMyIWb052ZJ9dPERr7%2FNuIXlWo5G7i8aczK7o%2BjrqOv%2FhGKa%2FzSUGng2hccEJBZYFGwWgnV4voWwqC4hb2zJ4Vrb5lQr%2Fp5ZTn8j2K4q03f9jUbKnNsJaL%2FRzwDz9m%2FWBh%2B4GupX%2B%2BdT%2BYDi3jFbrm7eByJU8Z5guxHvWAUEqYOCxToGb%2FpZDWnzPbNW5xuZYwshdeuZP67GB2bdDZ0nqkIfl0ui%2BPZbsQSP9zfAnyQA2WCNXFQt%2BNVqlewXp9VyRzfiMLRmeUKL5BtztSOX6imUUfft8aX8dLAgj%2BAAqFgjtUcXw1FuplW9ACQgN07mPN10dfLgtDgASyd5hnizTWVL%2FEIWYNTS3W7yokq41FFyjgBtPHjPhqYK42pJT9Sjh91iN8h%2BgGQ48Egnugqk9L0q0szcSLqcaegUDIGp6KuDHyFggdETRGC4OvcX0copsMx%2FmKd8A%2BloP8e7nXq7U%2BMmnc%2BuiBb%2FIFq0r%2Fui6Da8VZ9Pr7NOJrv%2F2ia%2FdBEGd1QsINLVam4UNQ7iEfPSai1mV80MqLrueDFoyvLTCZhcXJBjqkAZUurSkYoJ832935sxkVyAQNfr0iI5f1mdzhvcTCLKGcd97ui4307qC9VF1RI%2FOkOoxnhlL8vaGoaxpOH2s17d%2FIxjX8sWxledDRYg68cJ%2F1SHnLVom644X5xGqyXFOOOwSLWCbNKc%2FqWMhzpZUy7j3pVA04n80LvQRO5rwKd%2BhD9YJOlTy3r%2Bm5xVbMOUYJ9yZglWVNdJlKiN%2FObtuvb0KmRHgm&X-Amz-Signature=a2a5978e18f3e51a7dbc0ff4c83439070035b9377115a5df8f3803aa51a20aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RYVWI4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD4wikJ%2BIGWDbADIyzFN6CXd%2Fatea6sp4fvS3uCAew4MwIhAN%2FwqQIlDs%2BUo3D2iFspwMaivhpcrUUnFpIzvcMTHecuKv8DCEEQABoMNjM3NDIzMTgzODA1IgyQvRjifhCxqYgxJXQq3ANe8P2fOYc1A3qVA02hIA%2BdSyS84W1OMHCmDhcGYWb9cHQUi8y1TO1W%2B0s4ZZPiVemm98b%2BRGMZIkSM%2F78PHtdMyIWb052ZJ9dPERr7%2FNuIXlWo5G7i8aczK7o%2BjrqOv%2FhGKa%2FzSUGng2hccEJBZYFGwWgnV4voWwqC4hb2zJ4Vrb5lQr%2Fp5ZTn8j2K4q03f9jUbKnNsJaL%2FRzwDz9m%2FWBh%2B4GupX%2B%2BdT%2BYDi3jFbrm7eByJU8Z5guxHvWAUEqYOCxToGb%2FpZDWnzPbNW5xuZYwshdeuZP67GB2bdDZ0nqkIfl0ui%2BPZbsQSP9zfAnyQA2WCNXFQt%2BNVqlewXp9VyRzfiMLRmeUKL5BtztSOX6imUUfft8aX8dLAgj%2BAAqFgjtUcXw1FuplW9ACQgN07mPN10dfLgtDgASyd5hnizTWVL%2FEIWYNTS3W7yokq41FFyjgBtPHjPhqYK42pJT9Sjh91iN8h%2BgGQ48Egnugqk9L0q0szcSLqcaegUDIGp6KuDHyFggdETRGC4OvcX0copsMx%2FmKd8A%2BloP8e7nXq7U%2BMmnc%2BuiBb%2FIFq0r%2Fui6Da8VZ9Pr7NOJrv%2F2ia%2FdBEGd1QsINLVam4UNQ7iEfPSai1mV80MqLrueDFoyvLTCZhcXJBjqkAZUurSkYoJ832935sxkVyAQNfr0iI5f1mdzhvcTCLKGcd97ui4307qC9VF1RI%2FOkOoxnhlL8vaGoaxpOH2s17d%2FIxjX8sWxledDRYg68cJ%2F1SHnLVom644X5xGqyXFOOOwSLWCbNKc%2FqWMhzpZUy7j3pVA04n80LvQRO5rwKd%2BhD9YJOlTy3r%2Bm5xVbMOUYJ9yZglWVNdJlKiN%2FObtuvb0KmRHgm&X-Amz-Signature=4f9d3d93acfdf3086ce3ee04aac5175592700ad190f68960e1ec5e7aea9a4cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

