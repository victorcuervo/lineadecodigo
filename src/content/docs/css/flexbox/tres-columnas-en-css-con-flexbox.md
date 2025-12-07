---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BS6DBX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOCZpgIYTTCbr1WQmATekY6nITs9iawpWjwtKfwMilnQIhAILJDt%2Fgp5U9X4r19fqySwK9weUo9g9Uiff5UngHSBFCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhZlvzI%2BHpxqToM%2BEq3AMkagwdFYfv3R%2BV3SB9aPpcIr5SuZcpzd00oVGdscNDwPAMdbDnWsHq3Ok3zk7NmdZFWXUUeu0W%2BRH483NkBaXm2OmwJhv9OXoRLxt7%2Fvey9njDDlk7ls3EMc8oPCQMPA1sm1gsCRyiwHEVHTQRFa%2BueAG%2BN%2BpUN9c%2BM6RIdJQb1naF2Zak1W3AVD6xj7J4GkHr9jPCm6UYBli9vRQ7KW%2BvJ%2FPKTRbwp%2B9%2BjAvbPXtQIwtnDhy3S0CpJX8Jq4auQhL7%2BqvnWBZjOpWMHjd5VgeD2TV0Fm%2Bxx9uJciOQUdU86xJ1caK7ZB9QSMdxmV9bSQtHjlHL5xmqIvJ44M9wdPd5A6MjH7KK%2Fjja7pC93T5OtrQ5U1iCJRix3HfeYXgURVK7bCTV%2Fur%2FkvioOk1H80kt1wFCEgRnP8oZ%2B6NCIWGbsqUvUnep0AKBzDhwek%2BmPRj%2BLqx%2BW0kIX8H%2FJmVx5eRteRGytmPeIChkBr%2Bc4n6olDxKRYAMo3EPdhGdEjDHGmvQeR%2Fvl0MICgq1GPVIP8B8X3ZW5Z69Lnh5WI73HCmVTyIJ2qOrhyLprTiD%2BVKeMMw94vTQCZ84RnEVhyUDcoQAccoS0SAdvjRV5bF4CETdl%2FtY5ppzwjOUgA3dkDC1%2FdLJBjqkAckI4W7TRwvLXAnHBc65XK2ncVNn61LGIfoJSO5EhDtL56JXuc5J3wb3ax77sOnAStE4uncedixG%2FX2TFM22w7Nt2m5ZnHaV745tEsVOwRAIkR5g%2FPowCE0rrGnlaKoFIYR7CzpTl8aKgKuzauKrN1mfiazpX%2Bih6IeRvxflek5AA0KQp%2BYvjGIlukUs7CUMioUAM7tFmzGZwxkVurIhYEHe0ZHc&X-Amz-Signature=95a265e9d1067c4abec23c5f5f073796260efc4c26623c2dcc4aada07a767456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BS6DBX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOCZpgIYTTCbr1WQmATekY6nITs9iawpWjwtKfwMilnQIhAILJDt%2Fgp5U9X4r19fqySwK9weUo9g9Uiff5UngHSBFCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhZlvzI%2BHpxqToM%2BEq3AMkagwdFYfv3R%2BV3SB9aPpcIr5SuZcpzd00oVGdscNDwPAMdbDnWsHq3Ok3zk7NmdZFWXUUeu0W%2BRH483NkBaXm2OmwJhv9OXoRLxt7%2Fvey9njDDlk7ls3EMc8oPCQMPA1sm1gsCRyiwHEVHTQRFa%2BueAG%2BN%2BpUN9c%2BM6RIdJQb1naF2Zak1W3AVD6xj7J4GkHr9jPCm6UYBli9vRQ7KW%2BvJ%2FPKTRbwp%2B9%2BjAvbPXtQIwtnDhy3S0CpJX8Jq4auQhL7%2BqvnWBZjOpWMHjd5VgeD2TV0Fm%2Bxx9uJciOQUdU86xJ1caK7ZB9QSMdxmV9bSQtHjlHL5xmqIvJ44M9wdPd5A6MjH7KK%2Fjja7pC93T5OtrQ5U1iCJRix3HfeYXgURVK7bCTV%2Fur%2FkvioOk1H80kt1wFCEgRnP8oZ%2B6NCIWGbsqUvUnep0AKBzDhwek%2BmPRj%2BLqx%2BW0kIX8H%2FJmVx5eRteRGytmPeIChkBr%2Bc4n6olDxKRYAMo3EPdhGdEjDHGmvQeR%2Fvl0MICgq1GPVIP8B8X3ZW5Z69Lnh5WI73HCmVTyIJ2qOrhyLprTiD%2BVKeMMw94vTQCZ84RnEVhyUDcoQAccoS0SAdvjRV5bF4CETdl%2FtY5ppzwjOUgA3dkDC1%2FdLJBjqkAckI4W7TRwvLXAnHBc65XK2ncVNn61LGIfoJSO5EhDtL56JXuc5J3wb3ax77sOnAStE4uncedixG%2FX2TFM22w7Nt2m5ZnHaV745tEsVOwRAIkR5g%2FPowCE0rrGnlaKoFIYR7CzpTl8aKgKuzauKrN1mfiazpX%2Bih6IeRvxflek5AA0KQp%2BYvjGIlukUs7CUMioUAM7tFmzGZwxkVurIhYEHe0ZHc&X-Amz-Signature=d565103f0a50d0055e27d67720fc77513ea9c7efd99de24defc747e7e86e6509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

