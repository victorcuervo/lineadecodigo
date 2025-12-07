---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QETLYTH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr4ObGeodrDTqCKY9jSRsWFIKuRV%2BytLy6SgQoblpF8AiB06rpX5sAD0BJF%2FHL9Kor8iF%2BVcAbJ%2BnIWB92isgVL%2FiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9EKJD3Y2c%2Bv1cbpKtwDEVsxqVQM%2FdNLUPsmQwkemvcjBM%2FrqzZPpoI%2BbKNjJjsz3ZZS24y%2BgDOMmwNJGi8esCSp6o2pZq52OOWa6l%2BKz63riTye0OH27pKro6eklbKlK3%2FLPDlvXzZDTTFlf7fRtaEt3fm%2Fy4Q8eDHrmfhvXx5o8USOaAqtonaXLHL9gE%2F5i4o9HZYkagiX4pN%2Br6Bm9BM6d%2Ft%2BXByjstOTtNbsgP7c%2F%2B%2BdPEFS9SBf72Pg7bSmyrumJ4vE%2BPPclS%2FS8snw14QH9zB2ii7kBQG5MPYtdLmWhKGEM5xLzBDN0%2Fg1zHhCJUkgALki3KLWHE%2FEGkV4GaMS%2Fxj5x1iNcHEWfuw0SS1ovxAVj%2FLjiBRZS9rhoG%2BjOp5aptlLByVy%2FPAy2vuixuGzcLz5qUMF1JL3PIUuPjGKvE6LacqcSA78F8Flmz6H25af%2Fj3Tx%2FvPBmNbbGKP2V7wVLAq2RpBicrOexWV%2FOBu%2BEpAqfLnEI8fGOAjsUaYc3ernRXk%2FjSZpSEiazj4D%2F67aCCscPxHpDUhBUGJmh7H3ooseCTxijiC6xDQfpCYlX5BXgBDNE2cTBOaF2tovqiO8284gWqeTSXtpMOJAPG%2BvQml99goDXbQaj2Cz8Qsj0v4IGfb39q%2FeI0wj%2F7SyQY6pgHdWItU2bQcCoah%2FSsWJu6k8%2FzdG23KItb%2BVXhGcFYo7dKAzib3mzaG7IrnyYjwWK%2BjqB3Pgt26WOZkAcaNgITQtG9bGJ99Pkz0nEQL3yWQZc6HdEh5mHBzSM2HVrPOteiDnt8KyVkbq7BX03clOL6or3akUSIYKI6GqdakdHnCv7Ar%2Fe7%2BXrcvVc6z5R1%2BeKd8Fzap9Ulssoq1osw%2FvmgJfPMWW4mv&X-Amz-Signature=1106c31da3d9e283d251f9e7340e8af4b40bba4053ea9c2192be235cfb6258c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QETLYTH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr4ObGeodrDTqCKY9jSRsWFIKuRV%2BytLy6SgQoblpF8AiB06rpX5sAD0BJF%2FHL9Kor8iF%2BVcAbJ%2BnIWB92isgVL%2FiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9EKJD3Y2c%2Bv1cbpKtwDEVsxqVQM%2FdNLUPsmQwkemvcjBM%2FrqzZPpoI%2BbKNjJjsz3ZZS24y%2BgDOMmwNJGi8esCSp6o2pZq52OOWa6l%2BKz63riTye0OH27pKro6eklbKlK3%2FLPDlvXzZDTTFlf7fRtaEt3fm%2Fy4Q8eDHrmfhvXx5o8USOaAqtonaXLHL9gE%2F5i4o9HZYkagiX4pN%2Br6Bm9BM6d%2Ft%2BXByjstOTtNbsgP7c%2F%2B%2BdPEFS9SBf72Pg7bSmyrumJ4vE%2BPPclS%2FS8snw14QH9zB2ii7kBQG5MPYtdLmWhKGEM5xLzBDN0%2Fg1zHhCJUkgALki3KLWHE%2FEGkV4GaMS%2Fxj5x1iNcHEWfuw0SS1ovxAVj%2FLjiBRZS9rhoG%2BjOp5aptlLByVy%2FPAy2vuixuGzcLz5qUMF1JL3PIUuPjGKvE6LacqcSA78F8Flmz6H25af%2Fj3Tx%2FvPBmNbbGKP2V7wVLAq2RpBicrOexWV%2FOBu%2BEpAqfLnEI8fGOAjsUaYc3ernRXk%2FjSZpSEiazj4D%2F67aCCscPxHpDUhBUGJmh7H3ooseCTxijiC6xDQfpCYlX5BXgBDNE2cTBOaF2tovqiO8284gWqeTSXtpMOJAPG%2BvQml99goDXbQaj2Cz8Qsj0v4IGfb39q%2FeI0wj%2F7SyQY6pgHdWItU2bQcCoah%2FSsWJu6k8%2FzdG23KItb%2BVXhGcFYo7dKAzib3mzaG7IrnyYjwWK%2BjqB3Pgt26WOZkAcaNgITQtG9bGJ99Pkz0nEQL3yWQZc6HdEh5mHBzSM2HVrPOteiDnt8KyVkbq7BX03clOL6or3akUSIYKI6GqdakdHnCv7Ar%2Fe7%2BXrcvVc6z5R1%2BeKd8Fzap9Ulssoq1osw%2FvmgJfPMWW4mv&X-Amz-Signature=5c60e644e3f54463b6e784c127d70c43eb79b511a04531e136f0314f72cff616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

