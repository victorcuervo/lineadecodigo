---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQDIPZO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxPEK6oGlT4bu64BN8dwqGGEssAACTHBEn65q7PoFZbAiEA%2FdcnUVQOONLCB1cGF%2FygwU9zn9mbJTQF235t3K0COnAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOA9hZDymZj6YiRifCrcAxxU7FRfaDoXTetjjjdCWgXZY4F01cX%2BEktvrSdUzN4A2XhpY5U0j1eGrnapNtCg%2F9M3b0ZqWCE1m%2B%2Bw5f2ayXEMQFBonEbeCRPGO%2B0%2B93YVPwZfx14F%2BxZCAi04Vt%2F%2FErABLcLT8yNpYs07pXTVOZ5gzp9jIT1ht0Dhm4i7qywzjNiUdHDOXoG%2FIB%2B%2FMc0XZ40cuqvrBCHCffuz0%2FDHRU4XAKN7Y7VLAQ%2FJk7C2KHHR%2FUDyDOyPmscQPUaM1olno%2BJqgOsFSLSoy4Af2KL0DhLHBUC%2FHqz2r8erPdo229U6asYazDGuHyFzByoJGKFFyWGXan%2FygriRWQzHPv058LmbDLP2YoXQsw%2F28uUcRVuGtNPR0LiNZVQXguP5lirNWtjpe1Yu9pufGMyidBcNxU8N8cesmNr4px2iEHGoen%2BcpMgKRSCwyXIIpfWnZolDiqxvXX7xX0d82RZ94SupjId4pGgq0UYuGKAwoqdGK8yGQutp6O4%2FR%2FjZlWZEFmvmfVIrnayuM5HPtflCytm%2FgrwSkfMDr2yQhI4NFsreVxa%2BT1wZB7rWUHcyih6aBA7urJfURZbAO5CgIVAYqQFtm8bDAqjKkf0BLG7O1Z9mCyt55iKY373Vdk6ukeU%2BMPqt3skGOqUBa%2BdGrKva%2FqBGIAVYYJTfRfiZU1rUmlKYLLrTSJhoeYAt8fjnvORnDbl5H0dpl9MLAvqbTCJtBsllenXqSHc7JqZoAiIwhFWGriCSH2pWobiMZVQacuRFQq%2BkF3T6IEmAXAdfn2Vx%2FVEDtibxM5cnp5XKqBPqS%2BEqhf1GgRHEka1cPNZ2bFO7aYeYEAHaoUHr%2Bmyq8uF%2BiOjC8KPJCnwdgMydtB7%2B&X-Amz-Signature=a547b9a5527949939d178da08c074ce8febb0a5109dcdb0bc149d1dff4737974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQDIPZO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxPEK6oGlT4bu64BN8dwqGGEssAACTHBEn65q7PoFZbAiEA%2FdcnUVQOONLCB1cGF%2FygwU9zn9mbJTQF235t3K0COnAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOA9hZDymZj6YiRifCrcAxxU7FRfaDoXTetjjjdCWgXZY4F01cX%2BEktvrSdUzN4A2XhpY5U0j1eGrnapNtCg%2F9M3b0ZqWCE1m%2B%2Bw5f2ayXEMQFBonEbeCRPGO%2B0%2B93YVPwZfx14F%2BxZCAi04Vt%2F%2FErABLcLT8yNpYs07pXTVOZ5gzp9jIT1ht0Dhm4i7qywzjNiUdHDOXoG%2FIB%2B%2FMc0XZ40cuqvrBCHCffuz0%2FDHRU4XAKN7Y7VLAQ%2FJk7C2KHHR%2FUDyDOyPmscQPUaM1olno%2BJqgOsFSLSoy4Af2KL0DhLHBUC%2FHqz2r8erPdo229U6asYazDGuHyFzByoJGKFFyWGXan%2FygriRWQzHPv058LmbDLP2YoXQsw%2F28uUcRVuGtNPR0LiNZVQXguP5lirNWtjpe1Yu9pufGMyidBcNxU8N8cesmNr4px2iEHGoen%2BcpMgKRSCwyXIIpfWnZolDiqxvXX7xX0d82RZ94SupjId4pGgq0UYuGKAwoqdGK8yGQutp6O4%2FR%2FjZlWZEFmvmfVIrnayuM5HPtflCytm%2FgrwSkfMDr2yQhI4NFsreVxa%2BT1wZB7rWUHcyih6aBA7urJfURZbAO5CgIVAYqQFtm8bDAqjKkf0BLG7O1Z9mCyt55iKY373Vdk6ukeU%2BMPqt3skGOqUBa%2BdGrKva%2FqBGIAVYYJTfRfiZU1rUmlKYLLrTSJhoeYAt8fjnvORnDbl5H0dpl9MLAvqbTCJtBsllenXqSHc7JqZoAiIwhFWGriCSH2pWobiMZVQacuRFQq%2BkF3T6IEmAXAdfn2Vx%2FVEDtibxM5cnp5XKqBPqS%2BEqhf1GgRHEka1cPNZ2bFO7aYeYEAHaoUHr%2Bmyq8uF%2BiOjC8KPJCnwdgMydtB7%2B&X-Amz-Signature=e37a36448620428ab00c1aeecbfb997b7b6f2645bbec14169447b1b93f9858e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

