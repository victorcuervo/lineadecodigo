---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EMDYNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ZcLizovLOdFNu4x%2BP%2FCag%2BWNglbUxAULrPl95jAVJQIgHxvqlhPQ3W%2FNYV4s%2BLpDrXX3y%2B5hlwRuLJ6mibmwbQ8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqLTn%2F2hC3l7KXImSrcAzYJEJpzPuTfZD32q3vEGJz0rToYlF3LkynRLlto0a6lpyRGxgG1%2FWYVgW3DTl%2BWr2DUrVtEJnfgTMrGXgDgaE9H%2BrdmGgjfg9qP13Ert67v75bB71b3m3tTd5VtzHUSIjGWVwk6LHLbo0OvEKNfxvmcB%2FaoJ%2BJ%2F9LCNsUFnLJB22404k5JYZaqwymgrWuQWgmca8GQcraAdyn3Of4ILku32zywhooc27RGHieve7brpOH9ttZmxR9LZho6%2FrgYyI2jMbBYN9FFvTUqtRIqTuchJ5IM7tIkeVCsHwExALKT2aKwCPDo0nTmD3MNeBSmb3qz1fbX61NrKUnjO43dHrWS5NFbHLaw0B21J2BReD%2BICKG4nbP98JaTuPnKmira5tu0KX79aE2iaYYlanZmkU%2FRFRaUJEcmfs%2BcnvtMJNHi6rDtOmwG7YX41MNbSUQYFSbbFx5zmeG4V0nel6%2BL5xhqbWzM2SUysNSMj26eqLvQtKdj1IY%2FgZ7SPVQo9D6I%2B7CwW72PfF0Ig9Zk7PCWeRBqvxwSXy7HmgbYyY4ye%2BmjP9KK1KS4x9eFeajSq7GnL4viuXNhyujUVsG68XTfJceTNFoG0bqunS2XbCdCLDUUDG0B5fjAQ5k7fgre3MM%2BZ1ckGOqUB257q3CSr6KTT3lu5DI5aCAeKH0JYpynrmdD770TWpIO6Lr4uuO0CiPI4wGoO3wDJjMXhZuJYZmJXZ5uCcxyF9m3ubi8KLtYhk8XGXmWaQhwTPca%2FraxjvSQ%2BkMH5YVaonKUnC4yGd8GI9kIAl%2B5G0Gx9J3ht2HFam7LYBkHVvoNtfnj4HeLWhSm7sjxfplEhZPIJnIyuLT9g%2Bdn4%2BkP74lIp9OwH&X-Amz-Signature=21fc90bc899eddc1f177dfdf69f770ff3d997fce34b6e1bd7383483a6e4f14da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EMDYNL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ZcLizovLOdFNu4x%2BP%2FCag%2BWNglbUxAULrPl95jAVJQIgHxvqlhPQ3W%2FNYV4s%2BLpDrXX3y%2B5hlwRuLJ6mibmwbQ8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqLTn%2F2hC3l7KXImSrcAzYJEJpzPuTfZD32q3vEGJz0rToYlF3LkynRLlto0a6lpyRGxgG1%2FWYVgW3DTl%2BWr2DUrVtEJnfgTMrGXgDgaE9H%2BrdmGgjfg9qP13Ert67v75bB71b3m3tTd5VtzHUSIjGWVwk6LHLbo0OvEKNfxvmcB%2FaoJ%2BJ%2F9LCNsUFnLJB22404k5JYZaqwymgrWuQWgmca8GQcraAdyn3Of4ILku32zywhooc27RGHieve7brpOH9ttZmxR9LZho6%2FrgYyI2jMbBYN9FFvTUqtRIqTuchJ5IM7tIkeVCsHwExALKT2aKwCPDo0nTmD3MNeBSmb3qz1fbX61NrKUnjO43dHrWS5NFbHLaw0B21J2BReD%2BICKG4nbP98JaTuPnKmira5tu0KX79aE2iaYYlanZmkU%2FRFRaUJEcmfs%2BcnvtMJNHi6rDtOmwG7YX41MNbSUQYFSbbFx5zmeG4V0nel6%2BL5xhqbWzM2SUysNSMj26eqLvQtKdj1IY%2FgZ7SPVQo9D6I%2B7CwW72PfF0Ig9Zk7PCWeRBqvxwSXy7HmgbYyY4ye%2BmjP9KK1KS4x9eFeajSq7GnL4viuXNhyujUVsG68XTfJceTNFoG0bqunS2XbCdCLDUUDG0B5fjAQ5k7fgre3MM%2BZ1ckGOqUB257q3CSr6KTT3lu5DI5aCAeKH0JYpynrmdD770TWpIO6Lr4uuO0CiPI4wGoO3wDJjMXhZuJYZmJXZ5uCcxyF9m3ubi8KLtYhk8XGXmWaQhwTPca%2FraxjvSQ%2BkMH5YVaonKUnC4yGd8GI9kIAl%2B5G0Gx9J3ht2HFam7LYBkHVvoNtfnj4HeLWhSm7sjxfplEhZPIJnIyuLT9g%2Bdn4%2BkP74lIp9OwH&X-Amz-Signature=8011a489b33901d2cd81c7db89945d7221fdecc75be7adb9458bc683d2d226a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

