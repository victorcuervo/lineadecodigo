---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVJGBJK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B%2Bi9C7L1IYmAkBTQ83kmj8nBYDPtf1cNxsoN6%2BYX%2BbAiEAtP6fNqi5XH0cUUXT3%2FBmg9PTr6j4PCeHAAeH18N4EvUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJgzaaEYBV5fdGDFkyrcA2YJlugonFrAAuksXiKrBpr2oSa%2Bj2Dd1f%2BmKPMJxkLf23EmcDvuVrGIDI0sNPS8F%2BYaFddyP1gf4WhbVCsn1UPMn%2BJFghG3kEz8ds%2FUHhzpdiMchZIIx4JGHcjHKb5HZYz0yWiBM3Z5FxCyjHXeXa07NR7X3st0kvaYo5tUtgBXrZ9Ybf8x1tH2LoChkNeYTW6DeyAPuhEEAP1syNupie3Nxq3b4%2FOeJBq7D09Luw%2BiELJmrZXcDrC6oBhvbpZHLDFCKvO%2FlFE9xOXkC5%2F5Tarr9lj5Ol%2BIDIF5BNKHWw9oDP%2BfWFuu7OCDWV%2B2ElzaTna8bsSJrMXsIO6NMtga36SkYTEAaTrTeVEM5%2F5nMJ0F4NPaPs7GREMdj1SibqNr90NtmzfzWJQTcZLPteSzhWfx0dWCyh4tr7TtG7XXWzjHVJXs22F2wIdi6w9mhUXU2OS%2FFZwtn3vXFZaFv9VCCTvZNYh3vT2uNGADKnho%2Bbw19cdven4qU2YzLcGrJqJUAN0t2EgYZzNkX0%2BTy1iQ%2F8Lgpy9b%2F6L%2BPUF3U2l1i7lslCYyZ0kkYiwZ8DP5WLEuurVn65bIkyswm5nM26gwEvAm7Q2DJRoqbkj3k1HEimpCrH5FpC%2FB%2FyfrznleMM7DzskGOqUB3KMc0pXp0QlUFSc%2BitTgoD9m0OwVS595qmPEwiSBfyJ2v91UhDcF1xnhTRpRx1UAmZNZr9Ug92GGPXir1TA814p9rQtt%2FcBWJH6iwswTovVxuqUJ%2FFwJF5HDW%2Bka1mDRprVZYPDdi6fJ2iOkrigXTMciJe41%2F4b9c6ePRYSkIyBbWyYByylw0Y2zr%2F3VZa2YemSNTwf%2BPieky4Y8sMaMlMyBhm7R&X-Amz-Signature=5c13d3f59f9dac68845ca88fe31b109d6c32652a3d05e202b59c558d7feb3f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVJGBJK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B%2Bi9C7L1IYmAkBTQ83kmj8nBYDPtf1cNxsoN6%2BYX%2BbAiEAtP6fNqi5XH0cUUXT3%2FBmg9PTr6j4PCeHAAeH18N4EvUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJgzaaEYBV5fdGDFkyrcA2YJlugonFrAAuksXiKrBpr2oSa%2Bj2Dd1f%2BmKPMJxkLf23EmcDvuVrGIDI0sNPS8F%2BYaFddyP1gf4WhbVCsn1UPMn%2BJFghG3kEz8ds%2FUHhzpdiMchZIIx4JGHcjHKb5HZYz0yWiBM3Z5FxCyjHXeXa07NR7X3st0kvaYo5tUtgBXrZ9Ybf8x1tH2LoChkNeYTW6DeyAPuhEEAP1syNupie3Nxq3b4%2FOeJBq7D09Luw%2BiELJmrZXcDrC6oBhvbpZHLDFCKvO%2FlFE9xOXkC5%2F5Tarr9lj5Ol%2BIDIF5BNKHWw9oDP%2BfWFuu7OCDWV%2B2ElzaTna8bsSJrMXsIO6NMtga36SkYTEAaTrTeVEM5%2F5nMJ0F4NPaPs7GREMdj1SibqNr90NtmzfzWJQTcZLPteSzhWfx0dWCyh4tr7TtG7XXWzjHVJXs22F2wIdi6w9mhUXU2OS%2FFZwtn3vXFZaFv9VCCTvZNYh3vT2uNGADKnho%2Bbw19cdven4qU2YzLcGrJqJUAN0t2EgYZzNkX0%2BTy1iQ%2F8Lgpy9b%2F6L%2BPUF3U2l1i7lslCYyZ0kkYiwZ8DP5WLEuurVn65bIkyswm5nM26gwEvAm7Q2DJRoqbkj3k1HEimpCrH5FpC%2FB%2FyfrznleMM7DzskGOqUB3KMc0pXp0QlUFSc%2BitTgoD9m0OwVS595qmPEwiSBfyJ2v91UhDcF1xnhTRpRx1UAmZNZr9Ug92GGPXir1TA814p9rQtt%2FcBWJH6iwswTovVxuqUJ%2FFwJF5HDW%2Bka1mDRprVZYPDdi6fJ2iOkrigXTMciJe41%2F4b9c6ePRYSkIyBbWyYByylw0Y2zr%2F3VZa2YemSNTwf%2BPieky4Y8sMaMlMyBhm7R&X-Amz-Signature=420661dddf0c905776f885b08bfef9f130ee304287e220c5ed6f70405d124f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

