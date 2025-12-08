---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5DAX7Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNyPX5PfLwVOkbHYklo9INvU0KVwB9coZ4qziYOO78wIgIglQaQch0vEj3MNd1IF74a0SOMlr%2BiaWN%2FjD3s3lgjAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImwXkDg5bYv5b5CMyrcA%2FQ086TGh2aFZy5xnDoSbudHVMHnApjXd5rzS293R5JjKji4wmBBJezzC%2FAojWbVIpjpMd5P2%2FvoVReodDtJeApY19rsBVxQgJGfk%2BCKRmdUoqdOOnuJlqCovVAmsB1AlP7HODURvqN6XeFUCwZJwd2tvgwRFsFecec%2FR7wCR2dZOB3TsYepiwGrQy7n%2BHSyfRYNLHvM2R8A9vQk0A5Nqwqbd%2BrcG7YBdx5pukxALRZlNIqwC241QqtppLSM38lUiajMGSNsBxpQMKWAK2T15kM4shi%2FTR7xzJ207ekVrEXhtcQR2nHsUFAQ4jVthPrflPUFEh1OKHv%2B44lk1aP5sXG384XSjM%2BiHwVPEcRH5ywvbXNJq3pJxcA4ZSJzN33dGSyxJxIILmxflZ8e6hDZ%2BP4FCznKq0wTHacJc7mf%2F76wAynN8jWZegGK05RCWvI2YAsSSO%2FltOhb%2BYKxjNpG8ZD7zjn3TwWa%2FR%2BG0TDhovWE7W%2FuYMY%2BlDYt0wzMyObuiyx%2FIRHsO2juDbVak3fwbxK11Ce18LVUspGC0%2FQxYPMiNJUbatHD2t8uDg9PHy5zYbS18oZuBl8e5g3W3DEE7yNEC4IsYH4LQg1UStP4lplD2mR2%2FVkykWMJP4kbMNTt2ckGOqUBhmCCFFKF%2FKV%2BVVSXX%2B3VSyKenGoBY3VsQdDUT%2FWU7nYOsFUks5vdqhap5LS67dOGN0vgvOgSTKCF6vNJq2gJ9n247yxC55VAVWfMf06g8MFg0djevqHQqYdeoLvTBsO%2FKDc6qTCkqMVQMsLTZUe27%2BYEKKUYvrrAaA9XKXtu2LyRhWxHUThp61PYsKN0y2TjUKcMZWCYw55vxZnK0FxOVR5s%2FoGD&X-Amz-Signature=bbbab0b88c6157c08a22658b921bde1182018b45c9a1bc05998478b0dc9f6065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5DAX7Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNyPX5PfLwVOkbHYklo9INvU0KVwB9coZ4qziYOO78wIgIglQaQch0vEj3MNd1IF74a0SOMlr%2BiaWN%2FjD3s3lgjAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImwXkDg5bYv5b5CMyrcA%2FQ086TGh2aFZy5xnDoSbudHVMHnApjXd5rzS293R5JjKji4wmBBJezzC%2FAojWbVIpjpMd5P2%2FvoVReodDtJeApY19rsBVxQgJGfk%2BCKRmdUoqdOOnuJlqCovVAmsB1AlP7HODURvqN6XeFUCwZJwd2tvgwRFsFecec%2FR7wCR2dZOB3TsYepiwGrQy7n%2BHSyfRYNLHvM2R8A9vQk0A5Nqwqbd%2BrcG7YBdx5pukxALRZlNIqwC241QqtppLSM38lUiajMGSNsBxpQMKWAK2T15kM4shi%2FTR7xzJ207ekVrEXhtcQR2nHsUFAQ4jVthPrflPUFEh1OKHv%2B44lk1aP5sXG384XSjM%2BiHwVPEcRH5ywvbXNJq3pJxcA4ZSJzN33dGSyxJxIILmxflZ8e6hDZ%2BP4FCznKq0wTHacJc7mf%2F76wAynN8jWZegGK05RCWvI2YAsSSO%2FltOhb%2BYKxjNpG8ZD7zjn3TwWa%2FR%2BG0TDhovWE7W%2FuYMY%2BlDYt0wzMyObuiyx%2FIRHsO2juDbVak3fwbxK11Ce18LVUspGC0%2FQxYPMiNJUbatHD2t8uDg9PHy5zYbS18oZuBl8e5g3W3DEE7yNEC4IsYH4LQg1UStP4lplD2mR2%2FVkykWMJP4kbMNTt2ckGOqUBhmCCFFKF%2FKV%2BVVSXX%2B3VSyKenGoBY3VsQdDUT%2FWU7nYOsFUks5vdqhap5LS67dOGN0vgvOgSTKCF6vNJq2gJ9n247yxC55VAVWfMf06g8MFg0djevqHQqYdeoLvTBsO%2FKDc6qTCkqMVQMsLTZUe27%2BYEKKUYvrrAaA9XKXtu2LyRhWxHUThp61PYsKN0y2TjUKcMZWCYw55vxZnK0FxOVR5s%2FoGD&X-Amz-Signature=b1cb910e5c07b51075dd4e32e99f06fb6f02519b0456e47d3ee4ffc34eb18cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

