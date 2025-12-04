---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMO6PY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDLO%2B3zdeldZ07fIYebQfU%2Bkog31uJBA3W3T95cPNyPkgIhAOgakq52zb963EnekjeAFGA%2Fjn0xfnSf2c09ygKoSa71Kv8DCD8QABoMNjM3NDIzMTgzODA1Igx7FxkNI5U%2BH%2BjNTmsq3AOeUacjO%2BmIVBwOO8eUVA%2ByIS%2ByJzveVS2mXoT63Jsqf4S657m1%2BlvETbG4O31jXbfwgEANnKHpmeThAi0ImmN3Kv%2FZndzdwyMFaNzvIDW5FHiDvU9A%2FOd1EkgRjwmqbhYQbcBgv0wW6NFr8Z35K58DRd6m4kXD%2FZPuTbzPCvZkZQ7e11t%2FsNTjPFn%2B5SyCi9XJfmQrTbc%2B6DN9t42oVNDPiEF%2Bpv6fGVBvAtXjNsUV0QAhroIYPZ%2FlBsyvOUVkbCw%2FneEWvQ%2B8Y90gcJZFU0P1yTXvdpwnr7shlneL6QMXcpgqSJpi%2FPYxB99moflBNyHzUEQtWJ6rsP3q3nqZad2I3VKaMr%2BbPlinxjliK1CZbchWOtst9Jh%2Fun%2BR%2BaZYz6x85GBwRHXOc8pPD3b4XXMjgZV8M4Tm7CwfiLlZaNUI6yTMTEBIKrX1FXqXCpwp7TcqKKSwAloEIe4kVlnnYEEmbtBSij%2BopToSrTHzQ%2FRlPYgDVyk3j6fWsd1XM5FKv08L2menUY%2BYt%2BfQLkX9fE%2BbW1deO7jzAJeicDOwcRFMnt6KV2lBb%2BRJ73RgGgGsx%2BF6vP1Dr%2BqTwiHToFadMCBWFoeenYeXqh5NwRZiuo1tvoGfetCI7Jx8RIc%2BiTCey8TJBjqkARCxLubDiAEQVqcMPMlEkHYfYhVr6V80YpDe6TX7BXOIqPqJHkYz2XjiAN83dFnVqSWlUjULSKroKohbEs9RWs3WAulQeJnq4PAv3jY4E2z047v7pvEixLeqLz5rd56x3%2FCG85CJEnxCYBON1r7cVnelxT9FZCQAt6A1S9IwSmfJUbbxTSpzVrYWqYLJnLNmARybIF3frwgooDeJJ5EBbf7%2BpiUa&X-Amz-Signature=daebcc6f780e7c1b06004ddc249ef01b43643d1cdc0921783db8b4f7797134d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QMO6PY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDLO%2B3zdeldZ07fIYebQfU%2Bkog31uJBA3W3T95cPNyPkgIhAOgakq52zb963EnekjeAFGA%2Fjn0xfnSf2c09ygKoSa71Kv8DCD8QABoMNjM3NDIzMTgzODA1Igx7FxkNI5U%2BH%2BjNTmsq3AOeUacjO%2BmIVBwOO8eUVA%2ByIS%2ByJzveVS2mXoT63Jsqf4S657m1%2BlvETbG4O31jXbfwgEANnKHpmeThAi0ImmN3Kv%2FZndzdwyMFaNzvIDW5FHiDvU9A%2FOd1EkgRjwmqbhYQbcBgv0wW6NFr8Z35K58DRd6m4kXD%2FZPuTbzPCvZkZQ7e11t%2FsNTjPFn%2B5SyCi9XJfmQrTbc%2B6DN9t42oVNDPiEF%2Bpv6fGVBvAtXjNsUV0QAhroIYPZ%2FlBsyvOUVkbCw%2FneEWvQ%2B8Y90gcJZFU0P1yTXvdpwnr7shlneL6QMXcpgqSJpi%2FPYxB99moflBNyHzUEQtWJ6rsP3q3nqZad2I3VKaMr%2BbPlinxjliK1CZbchWOtst9Jh%2Fun%2BR%2BaZYz6x85GBwRHXOc8pPD3b4XXMjgZV8M4Tm7CwfiLlZaNUI6yTMTEBIKrX1FXqXCpwp7TcqKKSwAloEIe4kVlnnYEEmbtBSij%2BopToSrTHzQ%2FRlPYgDVyk3j6fWsd1XM5FKv08L2menUY%2BYt%2BfQLkX9fE%2BbW1deO7jzAJeicDOwcRFMnt6KV2lBb%2BRJ73RgGgGsx%2BF6vP1Dr%2BqTwiHToFadMCBWFoeenYeXqh5NwRZiuo1tvoGfetCI7Jx8RIc%2BiTCey8TJBjqkARCxLubDiAEQVqcMPMlEkHYfYhVr6V80YpDe6TX7BXOIqPqJHkYz2XjiAN83dFnVqSWlUjULSKroKohbEs9RWs3WAulQeJnq4PAv3jY4E2z047v7pvEixLeqLz5rd56x3%2FCG85CJEnxCYBON1r7cVnelxT9FZCQAt6A1S9IwSmfJUbbxTSpzVrYWqYLJnLNmARybIF3frwgooDeJJ5EBbf7%2BpiUa&X-Amz-Signature=ed504c98f74f788e2a5b51fc793b49b049c141a1331831d08a82fbed3850efb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

