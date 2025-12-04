---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFBJPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFOYhYbutDhBNOBZir6d1oBJwKc6ldiK9S0VB4F%2FB9J%2BAiAI8YFOQVmhVQ%2FMXlWaWEYyFTm2ibZtPeS20ovJIpcOPCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMObvlY%2Bk%2BtOmjxHdZKtwDd%2BdCXJ0u3tZV3WxMsJV1ibpAe4y3RNA7JgLN8xMYzuTZsGgtP7lEmN28kz%2F%2F8g7BVyRausNAer2zivJLWx1NGbgcE1FdbAiiXqKwwIH7hXIMzxflIocJr0IZ2Kc0fHwjOUeyTMJ6cJfB8ql6MBghb55BxDtIf5YVEHWEb%2BZcxeSaYUGzt6njv1l4MIr12sJybGk3IobToiWEx6XW7Mf2q4SxbdRnqOWmarZGLhai9iFGRfdaZ3HkX2auSD9fTVtjB52xsdl3VdHhn0Uhs8PyT%2Fmbh1td5AUoP8NZPRFB6hiKr66FeMZnez1snXdJi9l%2BXWATOco503nSLfguLXif%2F%2BXsR3WLhC%2BGkvbdOHpnx3JXQEuZq%2BI%2B5Z3zn5KeVieGqKpoaIb5QjdRc0orpcvAGiNZruNnRlhBn762Mtrz4A4zyplSYlyOw3oi2wNZUghMoR0%2BXHkAIdpg0toIo4Y0wREgcl47%2B68y5tRB6cr1zG0VFBWw%2FQrjWE0lyILvWpziaDcgherA%2FLTFw3mMZetmQMCOIpk%2BZeeb0%2BNJnoVrN3rExUxJjJmDnbXRAchoqAg9Gfk5JYZlc%2B6JdtXTmfxVZG1VVbmIaQf7IbfmkkqfmA62zBy5pDvFfkrbrjowl5LEyQY6pgEZKxPaZbJ6edjrqdCf53lrAq7gflfksOzAUdDbblyMJFs%2Fjs4j%2BHn0E543iRkJSWsxXFtXO6QJpu3lyzskm7efU%2B7MlwTEqsNT1o8oF82o9jERwxRjjAW%2FzHyqgS3jDnKX5hWgEHvJUuElfy7EcKIXRinH5u6yBwIc9m6I29FvCwczcIZwuBFDVnnNRgmfuZhAjlynKCeoabokzZyi%2BStAD1I7nXDW&X-Amz-Signature=fdbe975343d77f331b41b8c9f9621121893d81732894c7080e77d143f9c58cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKFBJPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFOYhYbutDhBNOBZir6d1oBJwKc6ldiK9S0VB4F%2FB9J%2BAiAI8YFOQVmhVQ%2FMXlWaWEYyFTm2ibZtPeS20ovJIpcOPCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMObvlY%2Bk%2BtOmjxHdZKtwDd%2BdCXJ0u3tZV3WxMsJV1ibpAe4y3RNA7JgLN8xMYzuTZsGgtP7lEmN28kz%2F%2F8g7BVyRausNAer2zivJLWx1NGbgcE1FdbAiiXqKwwIH7hXIMzxflIocJr0IZ2Kc0fHwjOUeyTMJ6cJfB8ql6MBghb55BxDtIf5YVEHWEb%2BZcxeSaYUGzt6njv1l4MIr12sJybGk3IobToiWEx6XW7Mf2q4SxbdRnqOWmarZGLhai9iFGRfdaZ3HkX2auSD9fTVtjB52xsdl3VdHhn0Uhs8PyT%2Fmbh1td5AUoP8NZPRFB6hiKr66FeMZnez1snXdJi9l%2BXWATOco503nSLfguLXif%2F%2BXsR3WLhC%2BGkvbdOHpnx3JXQEuZq%2BI%2B5Z3zn5KeVieGqKpoaIb5QjdRc0orpcvAGiNZruNnRlhBn762Mtrz4A4zyplSYlyOw3oi2wNZUghMoR0%2BXHkAIdpg0toIo4Y0wREgcl47%2B68y5tRB6cr1zG0VFBWw%2FQrjWE0lyILvWpziaDcgherA%2FLTFw3mMZetmQMCOIpk%2BZeeb0%2BNJnoVrN3rExUxJjJmDnbXRAchoqAg9Gfk5JYZlc%2B6JdtXTmfxVZG1VVbmIaQf7IbfmkkqfmA62zBy5pDvFfkrbrjowl5LEyQY6pgEZKxPaZbJ6edjrqdCf53lrAq7gflfksOzAUdDbblyMJFs%2Fjs4j%2BHn0E543iRkJSWsxXFtXO6QJpu3lyzskm7efU%2B7MlwTEqsNT1o8oF82o9jERwxRjjAW%2FzHyqgS3jDnKX5hWgEHvJUuElfy7EcKIXRinH5u6yBwIc9m6I29FvCwczcIZwuBFDVnnNRgmfuZhAjlynKCeoabokzZyi%2BStAD1I7nXDW&X-Amz-Signature=230cb0211716da58bd51fcc015395f12b2c8e4ce5a0d94032f0449b927b86b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

