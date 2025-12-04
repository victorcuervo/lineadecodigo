---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUZJNMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChmWAJs7NRWI1cFzefWnsaMsSMMZZBJtymRluSoFmzKgIhAP2%2BgQzJBpJe4DYetGsEt786HyVjT0foO6dR0WZJqqqpKv8DCEAQABoMNjM3NDIzMTgzODA1IgzmczeIzD5m%2FdWsaD0q3AOg7udWhUmSuPzmRdyiDkjEJvpOTVUk2jpbRzS8EpOc872Y%2FZ1UchcVFAcGgTDoBUwzc0xWYOUojzFnbFMlId2hiRrmWlkBX9NH1FqOZddn5wWqhREeeKq1lPZUboPN%2BQvYKO90VTynHz5nMZsVBSRN36RnP8F%2FbSzEaEO%2FyRNYhgMehYPOXHWC5La19xGBf%2FuzER5J199jMZJs7SqvsiIat9S7U6FEyVRSwPKEEzxTS3b4%2FLFZGW1OXydl30uPoh%2FdlMjQ7zp0DXNtxHKuMoyVWs0qYCwJxsXZGcPUqUnGqC9h3rfeCPPljiA%2BYgzSRHhI9F74B5Wmh5rGUX81EYlEgUs0wRKKM3G%2Fw2752t%2BwhbboWOWvy9n8TJz8EOH%2F6mvR%2F4xRRp8qLPcOrTOuHR09GNLPNX920w4CpacQGFmwnbRuF2b3vbbbzemMPjCkWtpNtm1Jo3QHK0p%2BpzuUAZZo4evppPXIVWHU6alnZfuN%2Bhljual00wYQVFJFz2y27cfZPp6pXlut5loCFJRcivxJnwUb1u1Abmw3CvFtVij6YpzvHjHgzFLRybJRuudT9it5sZ5TicjttzhEBynPMtw4truJ5Osr9OpfxKXLMCfThuyvDuUHcf5tjgfqzDDd6MTJBjqkAatjnh%2BIH0ra7AgCquMxe6qY9rJQXF753NfTvyqw7ymlsX5h8qcn5AR0HPzVcAPxvUPIIHhKWQ8BGDqEFC6vxZqvSSJvmF6DZ8Vwb%2BbxAsUSghMqm6HdVWNwBzEw6ip%2F2LZGAWa8sUjKnJBhpgjJlGED0I7OSK4Ann2%2FOh8rfFrfUrbrxEDUruRqc%2BYTl67CgzxwRTWwl9Kx6cLR2QOL6GNqCcif&X-Amz-Signature=c8c93e376d1f179d8f47e93272128465df86c147f7fbae44cf77c17bac246aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCUZJNMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChmWAJs7NRWI1cFzefWnsaMsSMMZZBJtymRluSoFmzKgIhAP2%2BgQzJBpJe4DYetGsEt786HyVjT0foO6dR0WZJqqqpKv8DCEAQABoMNjM3NDIzMTgzODA1IgzmczeIzD5m%2FdWsaD0q3AOg7udWhUmSuPzmRdyiDkjEJvpOTVUk2jpbRzS8EpOc872Y%2FZ1UchcVFAcGgTDoBUwzc0xWYOUojzFnbFMlId2hiRrmWlkBX9NH1FqOZddn5wWqhREeeKq1lPZUboPN%2BQvYKO90VTynHz5nMZsVBSRN36RnP8F%2FbSzEaEO%2FyRNYhgMehYPOXHWC5La19xGBf%2FuzER5J199jMZJs7SqvsiIat9S7U6FEyVRSwPKEEzxTS3b4%2FLFZGW1OXydl30uPoh%2FdlMjQ7zp0DXNtxHKuMoyVWs0qYCwJxsXZGcPUqUnGqC9h3rfeCPPljiA%2BYgzSRHhI9F74B5Wmh5rGUX81EYlEgUs0wRKKM3G%2Fw2752t%2BwhbboWOWvy9n8TJz8EOH%2F6mvR%2F4xRRp8qLPcOrTOuHR09GNLPNX920w4CpacQGFmwnbRuF2b3vbbbzemMPjCkWtpNtm1Jo3QHK0p%2BpzuUAZZo4evppPXIVWHU6alnZfuN%2Bhljual00wYQVFJFz2y27cfZPp6pXlut5loCFJRcivxJnwUb1u1Abmw3CvFtVij6YpzvHjHgzFLRybJRuudT9it5sZ5TicjttzhEBynPMtw4truJ5Osr9OpfxKXLMCfThuyvDuUHcf5tjgfqzDDd6MTJBjqkAatjnh%2BIH0ra7AgCquMxe6qY9rJQXF753NfTvyqw7ymlsX5h8qcn5AR0HPzVcAPxvUPIIHhKWQ8BGDqEFC6vxZqvSSJvmF6DZ8Vwb%2BbxAsUSghMqm6HdVWNwBzEw6ip%2F2LZGAWa8sUjKnJBhpgjJlGED0I7OSK4Ann2%2FOh8rfFrfUrbrxEDUruRqc%2BYTl67CgzxwRTWwl9Kx6cLR2QOL6GNqCcif&X-Amz-Signature=04c4febc7e38992c50da9af05bd50a7a1831467781fb6d81842bd28b6aa1e237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

