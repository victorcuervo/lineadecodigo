---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBHZOPY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZFmR%2F27zk%2BJjKzu%2BwmtfGLwAyoKxKlbO%2FB45Ay7%2FinwIgHkeCfPn1QXeukSWDiVdrhp%2FHnZ6VzTxEAUV4v9EQDtkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMjF9NSFw%2BbFE8IrsSrcAyYWnGKDvu7T28P7zap43791Tn9lGiI%2Bp0QV7DXJSrxA2is66cU11j5WG76zvKRttRwShMPDkyh87zG6oE5ibNJU2YmgJdMDq9Aa7yrK5eu8ej5SlHaK3dfInPU6%2B9V0%2FfWXckyzX1PSK8tlFN%2B5lK8dWeHkG0VhNkcc1j4Q9odSfD5v4%2FKQbjAzMK3GcVBX8DkYyy21jp6CtS2kmgMhnpm53BCJCrGZU2X%2FtvF3vNZQFbFyN%2FozXZ3oW0mY5cekbA%2BiSBeyYh%2FiR9e4i6YaFLbl%2BWKUFpHYHRKatd3CTDWP1R9l9dA%2Bsb%2BTmZyrIMSlXZO3eLtCUXZj%2F4C6UjlsfoxKfTNALFJJ03YbQyTEBVW94UqmlfK5Ln0PaFD%2BXjthQukC9iJWp2Lc%2FUb8tygxLE3%2BtXQl4hK2zGcknumthdijJTjrzQCOe0wwyOl0tMFuTsjuAZ2sDsu%2F3L8Kmxl8PM3tOsNCVtwV65YfFPMyYV3ZFNWlCAY%2Bpz3C7CgXDU%2B3NobfPJxLfhqX1iB1oYfqaRd3GZjMkQ26xw%2B3Y4okMSDfmCXzYRGRQyBkXRUJMC9tGr3qNi4jFuIeRiI5IiceMMEZbBV8a26FAT%2Fzip%2F2KZukCul8BpOOLxaRKc3vMOOm0MkGOqUB27oGUznesRlLmPW5V72%2Fj4oOUJcKK6Yy6TK98R4S%2F78nBmDulJILUqV7OlEr3mwgBVZopOqjD0Z4cUGM5jlubSLRA5NqnfcwH54u4a7ytrYywmRMeQd7%2BdiOc98NKxMBdrLAC112NyXBJ9ghWqZBwY5BnHOIaSdBFFR3pg0tn8mOZpKxd2G2g6RmB6vDFlOE5ceVNv8eSHq3s9EVC3wMKWmtcUra&X-Amz-Signature=015c4b919c0800a7228fd1f25e701c23bfe4607fd38fe807ed8008966e1d6a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBHZOPY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZFmR%2F27zk%2BJjKzu%2BwmtfGLwAyoKxKlbO%2FB45Ay7%2FinwIgHkeCfPn1QXeukSWDiVdrhp%2FHnZ6VzTxEAUV4v9EQDtkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMjF9NSFw%2BbFE8IrsSrcAyYWnGKDvu7T28P7zap43791Tn9lGiI%2Bp0QV7DXJSrxA2is66cU11j5WG76zvKRttRwShMPDkyh87zG6oE5ibNJU2YmgJdMDq9Aa7yrK5eu8ej5SlHaK3dfInPU6%2B9V0%2FfWXckyzX1PSK8tlFN%2B5lK8dWeHkG0VhNkcc1j4Q9odSfD5v4%2FKQbjAzMK3GcVBX8DkYyy21jp6CtS2kmgMhnpm53BCJCrGZU2X%2FtvF3vNZQFbFyN%2FozXZ3oW0mY5cekbA%2BiSBeyYh%2FiR9e4i6YaFLbl%2BWKUFpHYHRKatd3CTDWP1R9l9dA%2Bsb%2BTmZyrIMSlXZO3eLtCUXZj%2F4C6UjlsfoxKfTNALFJJ03YbQyTEBVW94UqmlfK5Ln0PaFD%2BXjthQukC9iJWp2Lc%2FUb8tygxLE3%2BtXQl4hK2zGcknumthdijJTjrzQCOe0wwyOl0tMFuTsjuAZ2sDsu%2F3L8Kmxl8PM3tOsNCVtwV65YfFPMyYV3ZFNWlCAY%2Bpz3C7CgXDU%2B3NobfPJxLfhqX1iB1oYfqaRd3GZjMkQ26xw%2B3Y4okMSDfmCXzYRGRQyBkXRUJMC9tGr3qNi4jFuIeRiI5IiceMMEZbBV8a26FAT%2Fzip%2F2KZukCul8BpOOLxaRKc3vMOOm0MkGOqUB27oGUznesRlLmPW5V72%2Fj4oOUJcKK6Yy6TK98R4S%2F78nBmDulJILUqV7OlEr3mwgBVZopOqjD0Z4cUGM5jlubSLRA5NqnfcwH54u4a7ytrYywmRMeQd7%2BdiOc98NKxMBdrLAC112NyXBJ9ghWqZBwY5BnHOIaSdBFFR3pg0tn8mOZpKxd2G2g6RmB6vDFlOE5ceVNv8eSHq3s9EVC3wMKWmtcUra&X-Amz-Signature=c214c0a2e25f1d68f1fde775eab0de9edb8f4b5e3ddbffa6908ebfdff0e21853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

