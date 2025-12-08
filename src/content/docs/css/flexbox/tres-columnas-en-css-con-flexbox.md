---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AC6YG6N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDayjpAJGupIH%2Fut3DRCIUKCDje08KubImMhKubZfTl5AiBPILQoOuuLgysumxuxRDxYLCzJ5RowaFOw4UWV8e9EDCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi0%2FImZiMPE8F9gRKtwDOUMAn8EViKawnJpvRQ06LxzWLqrDiQH07DJnD6%2F1Woge0pxH%2F3cq7XMDacny1Y2sMip%2FOuya1j1SBYuecIehvSVowVw2mmIWR%2FHdsEew5h1q407uugg0hzR7w6Ot7R80UGVwxeenHmHY7uhOqYuA9VHo7%2FqAiuUeQqtFtRT%2BfNORbP5DJFuekyFSUPBcxPTEcHXp79cVSkDoAIDAHbCC6AHVjrRqZdoHgJvt6mfc%2B%2BLi1TzUBk0%2F6054wc7eNH7Jryd2UiUEMWlsLMbCn66AXY1oC1K3tCpPwABjiOAacr0x79WSJgGZvDO2SYNUnUFdAXE8be189579EmeNVvdgrbB8a4UCEaehcAoj5uOhCr0I%2FYb%2BbvQSVRUuPV3xU3uQmrANiXKeXAEAvvlwbro6Zy5njtLtfg%2BRPhpxqRMFGQqhqw%2BbxIi3o48U9bJ6VF6aBy9%2BNl0egagu6uPbCn%2BSj%2F0ZDDlFxWtYavM8R50UZLnssL%2FWIWdGsDV95I%2B9SVS44qcnjOyZskbrk8tgIRea7AsPyrmWItNAQHCMmHbQ%2BhecZXMMIvoDlJQ9w%2FyE43OJv5qlyO61kbE2pKcXAZrvdzgdNmNPeCBSLAh8PKnIotxUw1N9LSSZf%2FRAUAUwkLTZyQY6pgETvAEgowF9vREccQoCCnDxDgC71XteIw3MpLloMRYnTB00NUVyFtQXxd4KX6E5AjlwUplYRTlB77tzAw4erNnn4iVDPJht5jIBSOTUR1Q9Dab%2BFe01ttA0aujetPJYctfOxtv1JuE1054tAPX6kq2DS2Jk%2B9pdHrZLTTst2zBlfP9kSFBQKLZjR7RPLBsO9Wyg0T9Iel9OzttH3BQbGgGbWfNBmpop&X-Amz-Signature=37b19c5465ee748722762eb07cd009ff34a6906aff423189bd3916511943c584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AC6YG6N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDayjpAJGupIH%2Fut3DRCIUKCDje08KubImMhKubZfTl5AiBPILQoOuuLgysumxuxRDxYLCzJ5RowaFOw4UWV8e9EDCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbi0%2FImZiMPE8F9gRKtwDOUMAn8EViKawnJpvRQ06LxzWLqrDiQH07DJnD6%2F1Woge0pxH%2F3cq7XMDacny1Y2sMip%2FOuya1j1SBYuecIehvSVowVw2mmIWR%2FHdsEew5h1q407uugg0hzR7w6Ot7R80UGVwxeenHmHY7uhOqYuA9VHo7%2FqAiuUeQqtFtRT%2BfNORbP5DJFuekyFSUPBcxPTEcHXp79cVSkDoAIDAHbCC6AHVjrRqZdoHgJvt6mfc%2B%2BLi1TzUBk0%2F6054wc7eNH7Jryd2UiUEMWlsLMbCn66AXY1oC1K3tCpPwABjiOAacr0x79WSJgGZvDO2SYNUnUFdAXE8be189579EmeNVvdgrbB8a4UCEaehcAoj5uOhCr0I%2FYb%2BbvQSVRUuPV3xU3uQmrANiXKeXAEAvvlwbro6Zy5njtLtfg%2BRPhpxqRMFGQqhqw%2BbxIi3o48U9bJ6VF6aBy9%2BNl0egagu6uPbCn%2BSj%2F0ZDDlFxWtYavM8R50UZLnssL%2FWIWdGsDV95I%2B9SVS44qcnjOyZskbrk8tgIRea7AsPyrmWItNAQHCMmHbQ%2BhecZXMMIvoDlJQ9w%2FyE43OJv5qlyO61kbE2pKcXAZrvdzgdNmNPeCBSLAh8PKnIotxUw1N9LSSZf%2FRAUAUwkLTZyQY6pgETvAEgowF9vREccQoCCnDxDgC71XteIw3MpLloMRYnTB00NUVyFtQXxd4KX6E5AjlwUplYRTlB77tzAw4erNnn4iVDPJht5jIBSOTUR1Q9Dab%2BFe01ttA0aujetPJYctfOxtv1JuE1054tAPX6kq2DS2Jk%2B9pdHrZLTTst2zBlfP9kSFBQKLZjR7RPLBsO9Wyg0T9Iel9OzttH3BQbGgGbWfNBmpop&X-Amz-Signature=bfb7d77c38408673536327c2fc94636120eb8b6a0a78ab03c06b96057d200b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

