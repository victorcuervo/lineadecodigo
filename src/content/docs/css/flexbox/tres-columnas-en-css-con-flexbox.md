---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYWAQ7D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBDdUf8ulQ%2FxW2qxZVcJc9WduEmu%2F59MY5ardqYEu4AiBa286igbqfF8fozm333cl5QQUdqvdpSzp8TU%2BAZMXnZir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAfvneXGTIfynH52FKtwDedPuwgzOSuEwCWKMCglV4mJaber6NMSi8xBb0tIapOm5EXosv5fWurssWvZ3Ki7L3DLtPPRk3uxP09sFq2A%2FllmPMR%2BAlRXG5Ju1KIBOQ6LUW2ZtzCGKkr0tmPbkOX5g6u3h0bOig%2F8EPz1%2BFv%2FPUzYvysYIXQKlP9zGeVEgRAAJJXjszaBIi33qlD6h5bmLWepNCB%2F2whnodOHSxnQjZpq1YKMLYfGXLeeb1ehJhUa4AVzBKJJcOwXinjxluu6K3E7aDXs59imBJK%2F8KmuxskL5O9jUklZLjZDJGAPwoj0YfVepA%2Ftk5UQ1eY01z8zR3Qgx6VHKxxmC1jgl2zGgCRgQuPPXdPtvD3tN3ayjQXaSbeO%2FFIB9t6WQeN5PQGvf5TN1DlW9wTfGwdX8XoX%2Bw8sYDHuWpqe3p%2BOc%2FpkhPsX%2FUF7Z3auYi2zViI%2Fp3PUfoDEPO8QD3dlNFIRmLNrnsCwAKq%2F0yd%2FKhNzdjkYXqlKZfhPDhC5UcOd20%2B1u8neTDQEfl0eZaUUpSjpUQKFO65vRYft0H8WA0xfacS1JOgpLnUV%2BEv6DUHNv8UvxHzmhy%2BFgPcC%2FrR9Ev63TQKOJ9r%2FqOiphUxEynx3JatwsfG65KuhdY7B5agmZevYw0KbQyQY6pgGud5TaJNyYWbEJvh7RV8oYJ%2BR9rI7gvYCpSUGtJ5%2BZB%2ByGJWpROxCNl92h8BuNRzZJ0mFRFP3wHLdW8ya6ATujpjpBT0QzWi4TPh2%2BxBAf0ICnrrA4rz8aaqlU3GHcXzumiGGCk89pQ2sXTEkEixLyM8MIJnRcV%2Bd2dDdlqvQsd2zZ3ZMQ1ucUs5b%2FFp8XYzqK5uhnlvhSXykx%2F77o4VOGKhVRRdIU&X-Amz-Signature=579f120d435a248b3c3cb92f287c5113ce1fb21e5ef0cfe37360955f1f1e943d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYWAQ7D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBDdUf8ulQ%2FxW2qxZVcJc9WduEmu%2F59MY5ardqYEu4AiBa286igbqfF8fozm333cl5QQUdqvdpSzp8TU%2BAZMXnZir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAfvneXGTIfynH52FKtwDedPuwgzOSuEwCWKMCglV4mJaber6NMSi8xBb0tIapOm5EXosv5fWurssWvZ3Ki7L3DLtPPRk3uxP09sFq2A%2FllmPMR%2BAlRXG5Ju1KIBOQ6LUW2ZtzCGKkr0tmPbkOX5g6u3h0bOig%2F8EPz1%2BFv%2FPUzYvysYIXQKlP9zGeVEgRAAJJXjszaBIi33qlD6h5bmLWepNCB%2F2whnodOHSxnQjZpq1YKMLYfGXLeeb1ehJhUa4AVzBKJJcOwXinjxluu6K3E7aDXs59imBJK%2F8KmuxskL5O9jUklZLjZDJGAPwoj0YfVepA%2Ftk5UQ1eY01z8zR3Qgx6VHKxxmC1jgl2zGgCRgQuPPXdPtvD3tN3ayjQXaSbeO%2FFIB9t6WQeN5PQGvf5TN1DlW9wTfGwdX8XoX%2Bw8sYDHuWpqe3p%2BOc%2FpkhPsX%2FUF7Z3auYi2zViI%2Fp3PUfoDEPO8QD3dlNFIRmLNrnsCwAKq%2F0yd%2FKhNzdjkYXqlKZfhPDhC5UcOd20%2B1u8neTDQEfl0eZaUUpSjpUQKFO65vRYft0H8WA0xfacS1JOgpLnUV%2BEv6DUHNv8UvxHzmhy%2BFgPcC%2FrR9Ev63TQKOJ9r%2FqOiphUxEynx3JatwsfG65KuhdY7B5agmZevYw0KbQyQY6pgGud5TaJNyYWbEJvh7RV8oYJ%2BR9rI7gvYCpSUGtJ5%2BZB%2ByGJWpROxCNl92h8BuNRzZJ0mFRFP3wHLdW8ya6ATujpjpBT0QzWi4TPh2%2BxBAf0ICnrrA4rz8aaqlU3GHcXzumiGGCk89pQ2sXTEkEixLyM8MIJnRcV%2Bd2dDdlqvQsd2zZ3ZMQ1ucUs5b%2FFp8XYzqK5uhnlvhSXykx%2F77o4VOGKhVRRdIU&X-Amz-Signature=b2ae1f8677c85314996970e7e901b0e567178dd6414c2f830bc8f4778885e6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

