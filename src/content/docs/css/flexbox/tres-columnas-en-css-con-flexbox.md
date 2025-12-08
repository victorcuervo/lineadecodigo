---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655JMHMX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwqojHUsMfvr%2BtVdklrDU8eHWJ7%2F9zp3mo0G8Wl68GjAiBNRqu0Vkv4kiTcE5e1aZY7%2FHjk5bzui0rh%2F0wYrjwmeyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3TUAfLshX5Al7bP0KtwDLMxpoSZHohUsSGkRD0%2FHHvUX5jW4v%2BhA%2B0Pb0lmdXhzlJMUemPE59TG6rRqJns9uZD9myLWUApNViAUOOaN0s8Hw0EL70HntmWjdRCNFDIQGeacCAVghKnCB9DtblVjKo47HpzQWs1d1%2BTTBppAPNv4w7kRjiV3gdAzdXu6O7FOwj5Ug48yC9RDfwtjiwxmyiy%2Bx3AENCeNFHwfsQ506LvxwBEwF2036dR1TV7q%2BFzJzjul5ZZanXUfHSK3ITdmR1Ezldo9LDQUv3fBC1AD%2FdRbMKje2Pr23AXnF46vWKEzee9zPUgc31wwlpG7GqQ%2Bt7kWBnixoavw561Z1ZJTPIPslpuIKuT7s%2BhvtAD7HR7WTqcBUCPFzK9gOsrBixosMya%2BY%2BgYZG2GJbOphoKdnLABslOkTMhQg1TvF65i0F8yn4AR%2FOohAbZ8yRFgAruEvZZzP6FNeR0EFFvXCJiyeihr1d8Y5ffB6bIiG4Ai%2BPRQeOo2ukkBmPP6LXvpBytnMwA7bxUsJ9au6KRcjLuK79%2FATBiSVqRAh1iVw9Zmh7bM3lcbu4wmn1RCwkTBiw53906A8Yuz6Jt2fzIlSy3%2Bwh4ldvhcsZAHPva%2FWaVoEMriT4guX7cvkuJvJQQMwu%2B3ZyQY6pgFLYNzXOlPsveGFEatYdhsGkOMvv94Accz6omE9ht6Hx4n1TkazMqvohT9slO7iS8%2BnQ%2FUcrVtKNOu75qcsH%2B0mvfwgQ9G4sSHQ%2BeiMs5%2B3DygKf1bYibVx%2FcHQZln1rjIzdUjxC94CdPljMrYUmwV8FHf%2F1Bvy%2FOp%2BJrSOU4KouAYImIA%2BVUz9HcOiyJmG4inGnP9017EVij2%2BooSyfokewSOIhx%2BV&X-Amz-Signature=12d23bf6b1f5d3b365750dcb7f91b2aab3cfefd6be3fa477800d321a4fcd5d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655JMHMX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwqojHUsMfvr%2BtVdklrDU8eHWJ7%2F9zp3mo0G8Wl68GjAiBNRqu0Vkv4kiTcE5e1aZY7%2FHjk5bzui0rh%2F0wYrjwmeyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3TUAfLshX5Al7bP0KtwDLMxpoSZHohUsSGkRD0%2FHHvUX5jW4v%2BhA%2B0Pb0lmdXhzlJMUemPE59TG6rRqJns9uZD9myLWUApNViAUOOaN0s8Hw0EL70HntmWjdRCNFDIQGeacCAVghKnCB9DtblVjKo47HpzQWs1d1%2BTTBppAPNv4w7kRjiV3gdAzdXu6O7FOwj5Ug48yC9RDfwtjiwxmyiy%2Bx3AENCeNFHwfsQ506LvxwBEwF2036dR1TV7q%2BFzJzjul5ZZanXUfHSK3ITdmR1Ezldo9LDQUv3fBC1AD%2FdRbMKje2Pr23AXnF46vWKEzee9zPUgc31wwlpG7GqQ%2Bt7kWBnixoavw561Z1ZJTPIPslpuIKuT7s%2BhvtAD7HR7WTqcBUCPFzK9gOsrBixosMya%2BY%2BgYZG2GJbOphoKdnLABslOkTMhQg1TvF65i0F8yn4AR%2FOohAbZ8yRFgAruEvZZzP6FNeR0EFFvXCJiyeihr1d8Y5ffB6bIiG4Ai%2BPRQeOo2ukkBmPP6LXvpBytnMwA7bxUsJ9au6KRcjLuK79%2FATBiSVqRAh1iVw9Zmh7bM3lcbu4wmn1RCwkTBiw53906A8Yuz6Jt2fzIlSy3%2Bwh4ldvhcsZAHPva%2FWaVoEMriT4guX7cvkuJvJQQMwu%2B3ZyQY6pgFLYNzXOlPsveGFEatYdhsGkOMvv94Accz6omE9ht6Hx4n1TkazMqvohT9slO7iS8%2BnQ%2FUcrVtKNOu75qcsH%2B0mvfwgQ9G4sSHQ%2BeiMs5%2B3DygKf1bYibVx%2FcHQZln1rjIzdUjxC94CdPljMrYUmwV8FHf%2F1Bvy%2FOp%2BJrSOU4KouAYImIA%2BVUz9HcOiyJmG4inGnP9017EVij2%2BooSyfokewSOIhx%2BV&X-Amz-Signature=8c98c3e82ebc2ffcdc3d0161e11f6ff5425ec1ddb5942f18264ef3714e1cf616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

