---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2Z3SGYB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHkDhEeYvJkd3cHOOf%2BcgYnZOkF2%2Fs8t1tVDzrzlZxTeAiEAkip1HSAEAJzu9taZcqQtz6szYR9JmRY3xnfIfle5k2Eq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJY5kNOQkuim0vIW3CrcA9%2BxJq8KXRqbq3NSWB238l2g%2FFaZUDdo8clMt8r3JZf8crV2L3FRoFr9GBPBb%2FDNgSAvqwXnBEEZ36PJpSYCkLrw6mnvs2BYQr49WFV3iIoWwCcixx%2BCLIXS%2FkMpPss%2BWS7wOBY4I7g6iarLU2Igfn%2FSx1cjwauSi6cDPZ12021IfVPio7GM%2F2mXUK2InTdVctELyX5U6MAj3C7UGGSxjgGamg8%2Foo7uuk0IAK2mi61cvD6YKTLLOY36PUicjcbeNsc1Tm8m0uXsIYNoI6bD%2BA%2BV9ABOgUpHb%2B3pgV0GWvmHas%2FOYBmw5hZwiAWPGWZTFki672AlPcAvymH2qY%2BRwuXZhT9P3sFU5AEno9fFLRoBhLbqZHMyiWQNy5rCeN3Zmd2eIUCy2g2Fuo5sh1XdUAXhYfDCiHhYo24xrlgvsuICE93RyNm8u%2BE0ZibV5Zj2fSJn87B1iebPHTJV8Q3AXnqq%2FouvR9Tj6Wiazxj0Uxk26Zquf6Cx94bG6Gj1unz4AdVO1Ou8RzWvC38%2FfNQ%2F0FQEtAoRdvMh8FEo9XKE0RnEv1M7SicvcfFe%2FwRi3vyjBthHYNcJgUJWcRl1MBlyEwYEbd4L8lHADJ9CRTuJjk0ZrLsy%2B5V29pexEg0%2FMOmDxskGOqUBHAZDh1mka62ILixVvbr8YpPDC2L9EIuLPIIVjk1elD1h0A5lpiAPkbrnMy4xB%2B7LZrm1wgErftoEFk7p2MdA7IHOAIJtWu3wvMnrtjB%2FBLaQkfD4diXbBlZER5JpCRspghif2Sl%2F2PxHb%2Bh9GGxk6lsmpdRIOzUGdWLyUNE7OoKCYAHhN%2FXBiLevv6LIUH4lgNkTNNFu%2BuH9wbmq3mYNv8LjL4ZF&X-Amz-Signature=d6a646312cf3a9faeae93bfa994beb3a5b8eab85c4112e67f3af4c1a43ea4f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2Z3SGYB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHkDhEeYvJkd3cHOOf%2BcgYnZOkF2%2Fs8t1tVDzrzlZxTeAiEAkip1HSAEAJzu9taZcqQtz6szYR9JmRY3xnfIfle5k2Eq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJY5kNOQkuim0vIW3CrcA9%2BxJq8KXRqbq3NSWB238l2g%2FFaZUDdo8clMt8r3JZf8crV2L3FRoFr9GBPBb%2FDNgSAvqwXnBEEZ36PJpSYCkLrw6mnvs2BYQr49WFV3iIoWwCcixx%2BCLIXS%2FkMpPss%2BWS7wOBY4I7g6iarLU2Igfn%2FSx1cjwauSi6cDPZ12021IfVPio7GM%2F2mXUK2InTdVctELyX5U6MAj3C7UGGSxjgGamg8%2Foo7uuk0IAK2mi61cvD6YKTLLOY36PUicjcbeNsc1Tm8m0uXsIYNoI6bD%2BA%2BV9ABOgUpHb%2B3pgV0GWvmHas%2FOYBmw5hZwiAWPGWZTFki672AlPcAvymH2qY%2BRwuXZhT9P3sFU5AEno9fFLRoBhLbqZHMyiWQNy5rCeN3Zmd2eIUCy2g2Fuo5sh1XdUAXhYfDCiHhYo24xrlgvsuICE93RyNm8u%2BE0ZibV5Zj2fSJn87B1iebPHTJV8Q3AXnqq%2FouvR9Tj6Wiazxj0Uxk26Zquf6Cx94bG6Gj1unz4AdVO1Ou8RzWvC38%2FfNQ%2F0FQEtAoRdvMh8FEo9XKE0RnEv1M7SicvcfFe%2FwRi3vyjBthHYNcJgUJWcRl1MBlyEwYEbd4L8lHADJ9CRTuJjk0ZrLsy%2B5V29pexEg0%2FMOmDxskGOqUBHAZDh1mka62ILixVvbr8YpPDC2L9EIuLPIIVjk1elD1h0A5lpiAPkbrnMy4xB%2B7LZrm1wgErftoEFk7p2MdA7IHOAIJtWu3wvMnrtjB%2FBLaQkfD4diXbBlZER5JpCRspghif2Sl%2F2PxHb%2Bh9GGxk6lsmpdRIOzUGdWLyUNE7OoKCYAHhN%2FXBiLevv6LIUH4lgNkTNNFu%2BuH9wbmq3mYNv8LjL4ZF&X-Amz-Signature=7bca01e33a160c29500c16929e020b9e5036e543f5612bf0213ddad22acd3c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

