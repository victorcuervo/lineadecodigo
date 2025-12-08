---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT4D4WC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo4eFtfQ8FF2jAazppjEQVXQBL33NK%2BhR%2F0tPXD3wQrAiAIMWLZuNioep%2F2DzeihIAT8dm7uA5%2BBTKvlG09P7y5oCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJQBWuQ8Irhl4PSnMKtwDb0ecLkC1KKbdVVwx7egyughTGfZjhG24PStuSy2%2FMRctba%2BXwHvJbcxy%2FAkpMV432AvjqLYh5GUFKYshwpuSSEQO382OoxvDNiHXmKllSAAxfDd3A%2FKtqK2kc1vdQX1BicVKYmSmRlx8Dfo56KerGynfaiHwd5ST5C3Zc61AKebBRrkd9GMvTlkHNiM6bgk5nPUE6XN7M2Y0RIq01vJza6XVmLpcrY4cHcZ0Cmlpz5vY7fJaedb6BmSWwewxHX0L06FgO%2BiJLogctru%2B%2BMgbvNyzMPBOuqURpQ75I8Myc17FXmY9TJ1jp1Kor6%2BjBk8dEmoocqzOrqu7delPNXqLWi5uBsC9wvpRGE%2BNhfE7OCD56xydqYk8ZrVIaD1JLm5b3rh%2F6%2BSVBONosAdzcMe35Dqf2cfkgutIHA3sq48dqmXW4Pa2liln5%2BFfaqcUAJjtPv9vC8BcHNWOvX13gBgnQFG4ah7Z5XijS7EI8PoRgH71BPKvMtdC9%2FuDX3eBj%2FJQ9oKN784jHXUnGoFYHTopi%2BUZL2KtnibHGVWeIjIyYA9%2FYqFVZRycX%2BDB6CSigrUCJs3eOIqe%2By62LgP%2FshUaR2EGvYuqRJhNVvQKPV1tXAx1uLiWZm%2BNxYWXfj4w9rTZyQY6pgFSU2hBY%2FbW4rGi3B9IsX%2BWcvnqPHqADcsnFCJhmUYVgilTJO6tAiOSxUrqd%2FWE97GhiG1V6YxVBc8aCQTiG%2B63qVCXCx%2FWl2zHNeitQNAdIjWhmxsANUAXIJZw1lTKnFk1gMPYi3GXTKj%2FUUnBikpz2ciqpF9NsWtUXnqqn7L%2BUFcya6OXpgGJQNquXjz8zUT03%2FLPgzNKzhSPoyVQmnPkytR7Y3Bt&X-Amz-Signature=023c0b13f6457f759234aeaad38fce66b72e735ce2610676c9f9b69626e41474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT4D4WC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo4eFtfQ8FF2jAazppjEQVXQBL33NK%2BhR%2F0tPXD3wQrAiAIMWLZuNioep%2F2DzeihIAT8dm7uA5%2BBTKvlG09P7y5oCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJQBWuQ8Irhl4PSnMKtwDb0ecLkC1KKbdVVwx7egyughTGfZjhG24PStuSy2%2FMRctba%2BXwHvJbcxy%2FAkpMV432AvjqLYh5GUFKYshwpuSSEQO382OoxvDNiHXmKllSAAxfDd3A%2FKtqK2kc1vdQX1BicVKYmSmRlx8Dfo56KerGynfaiHwd5ST5C3Zc61AKebBRrkd9GMvTlkHNiM6bgk5nPUE6XN7M2Y0RIq01vJza6XVmLpcrY4cHcZ0Cmlpz5vY7fJaedb6BmSWwewxHX0L06FgO%2BiJLogctru%2B%2BMgbvNyzMPBOuqURpQ75I8Myc17FXmY9TJ1jp1Kor6%2BjBk8dEmoocqzOrqu7delPNXqLWi5uBsC9wvpRGE%2BNhfE7OCD56xydqYk8ZrVIaD1JLm5b3rh%2F6%2BSVBONosAdzcMe35Dqf2cfkgutIHA3sq48dqmXW4Pa2liln5%2BFfaqcUAJjtPv9vC8BcHNWOvX13gBgnQFG4ah7Z5XijS7EI8PoRgH71BPKvMtdC9%2FuDX3eBj%2FJQ9oKN784jHXUnGoFYHTopi%2BUZL2KtnibHGVWeIjIyYA9%2FYqFVZRycX%2BDB6CSigrUCJs3eOIqe%2By62LgP%2FshUaR2EGvYuqRJhNVvQKPV1tXAx1uLiWZm%2BNxYWXfj4w9rTZyQY6pgFSU2hBY%2FbW4rGi3B9IsX%2BWcvnqPHqADcsnFCJhmUYVgilTJO6tAiOSxUrqd%2FWE97GhiG1V6YxVBc8aCQTiG%2B63qVCXCx%2FWl2zHNeitQNAdIjWhmxsANUAXIJZw1lTKnFk1gMPYi3GXTKj%2FUUnBikpz2ciqpF9NsWtUXnqqn7L%2BUFcya6OXpgGJQNquXjz8zUT03%2FLPgzNKzhSPoyVQmnPkytR7Y3Bt&X-Amz-Signature=30653c858775946a596ec841ab3ed05c48fb80f4355f5c13233e9a166264679c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

