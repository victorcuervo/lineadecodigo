---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636K37JZ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeIt3xn%2F7BdaGTgOcr7XjS6Ja9ARHR5jQhjAyrks4SCAiBrx3QUfCeORsnAA53zjkwNkxgjD%2BUjbHAPYwgqG69ZRSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoiqyWldJgYqsv9RkKtwDFaB%2FdfsMtRjUNyXLjSTjUVZUHrjVYDLQ3mRCNmmpa1md5We2xGqGe3ALUvMao%2BgmoUhjkr85yy2450J5EogA0VYLX%2B1SwTC0UkNCm4v0bhHXhm9QN6qQJ4C52D%2Bi%2FvxQIOex0KgQSPwmlVpt5Pye9MK9cC3dTzuW2AUMRJNJcA60gBEaoKlxfgnLVHrEqupfOdxSQdJNkTB6KbFb%2BZDi7nNxpRANCghlOxOnWGtCI8CYJzPp66AjXI7yhUfYPB2J7d%2FDWGTKMFQgS7PzJcSFxrG1oRYHb5uWdlpE7rdlppA5utWaUZIY3t0z846b%2B8lNzpBLQIzyUHsv34nVrnuwDu37%2By2gq695s5nmHLfkitUY15QtJgRuj6uF1lamXCwqTYlYYsUrbBewv0OxGB7pU2J2uavtvLIPQjwnx7iSwZZu6Dxgt8o2WjTWzgVoNJ3zGMa8T9T4OeJVY663b1PsAW8xaXOvqAYKmkotxZEFx2rl47L09jm%2BsLR10jA034XVrMnnqoIhc3r0jK%2Fihl0IusN7YkQ9u%2FeuKholiZuHajV1He9OoTLrNwaPcS%2Bgi5XZdkToCbu757TEFjS2jOqeeKC2dGIafb9RMd5dXTbHGDpuMg4kVC5gV1L5gLkwpe3ZyQY6pgExYFipcQ96gdxrkoDRL1P4Qvpd%2BP1WG8iLXM3rgtO8EH0WE8AEshRD7MaoElYrDDp1Dj%2B%2BvqU49rVFyicC10GzjcdDXLclKF2cfWJzvFRjgmm94%2BP3r%2F5XsCxp97MeOZlHXRcDaVf2Wfvy5mkEk0MzEQS6Gd1mmXR%2FK2rITDGI5VTa%2FItsPaQMgFYKZSkShf%2F0ixclZUOWzjW58Vz9uBY6hKf9NQBj&X-Amz-Signature=57542b922bb46fb97f8b80c5921e4af4d7014e3d50691b47fe598d72fb26953a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636K37JZ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeIt3xn%2F7BdaGTgOcr7XjS6Ja9ARHR5jQhjAyrks4SCAiBrx3QUfCeORsnAA53zjkwNkxgjD%2BUjbHAPYwgqG69ZRSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoiqyWldJgYqsv9RkKtwDFaB%2FdfsMtRjUNyXLjSTjUVZUHrjVYDLQ3mRCNmmpa1md5We2xGqGe3ALUvMao%2BgmoUhjkr85yy2450J5EogA0VYLX%2B1SwTC0UkNCm4v0bhHXhm9QN6qQJ4C52D%2Bi%2FvxQIOex0KgQSPwmlVpt5Pye9MK9cC3dTzuW2AUMRJNJcA60gBEaoKlxfgnLVHrEqupfOdxSQdJNkTB6KbFb%2BZDi7nNxpRANCghlOxOnWGtCI8CYJzPp66AjXI7yhUfYPB2J7d%2FDWGTKMFQgS7PzJcSFxrG1oRYHb5uWdlpE7rdlppA5utWaUZIY3t0z846b%2B8lNzpBLQIzyUHsv34nVrnuwDu37%2By2gq695s5nmHLfkitUY15QtJgRuj6uF1lamXCwqTYlYYsUrbBewv0OxGB7pU2J2uavtvLIPQjwnx7iSwZZu6Dxgt8o2WjTWzgVoNJ3zGMa8T9T4OeJVY663b1PsAW8xaXOvqAYKmkotxZEFx2rl47L09jm%2BsLR10jA034XVrMnnqoIhc3r0jK%2Fihl0IusN7YkQ9u%2FeuKholiZuHajV1He9OoTLrNwaPcS%2Bgi5XZdkToCbu757TEFjS2jOqeeKC2dGIafb9RMd5dXTbHGDpuMg4kVC5gV1L5gLkwpe3ZyQY6pgExYFipcQ96gdxrkoDRL1P4Qvpd%2BP1WG8iLXM3rgtO8EH0WE8AEshRD7MaoElYrDDp1Dj%2B%2BvqU49rVFyicC10GzjcdDXLclKF2cfWJzvFRjgmm94%2BP3r%2F5XsCxp97MeOZlHXRcDaVf2Wfvy5mkEk0MzEQS6Gd1mmXR%2FK2rITDGI5VTa%2FItsPaQMgFYKZSkShf%2F0ixclZUOWzjW58Vz9uBY6hKf9NQBj&X-Amz-Signature=2b6f01948769f69c77d3619eca4d5b9d1a3bb595975d7ef78ed6c5c2cbad6d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

