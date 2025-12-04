---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCQBRR7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICCtMwXkRRBc1DhL6fctBQtjHKlEScAzsJHlOD8rndurAiEAnHax0JtQoZDgL7rvPeU2iIRcSShKaK%2BEHNoCae2s5tEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOtXDnLnd9%2F8CDQu2SrcA3DauuBT6VF4zhPMKrVF%2B5zfE0SF0EOeT%2FbBZbNQwgA0Si9ykhjPaD2uRPn%2F7lYsb2ZxiBH%2BXferWDpKZh%2FlUZeM4bucjk%2BjNzvd8s1HewF84gFRBRfldGltmr4Yk3pPa6VdRp%2Ft4bL0Lq7Lb89faulaDVmtLYVzw%2B5ysk1EP2ogExb84gtpnN%2Bd5PDP14cLT6XG3P2RPbDxrB7OLauYh6vufSbp1MCcGJfXOl%2F%2B5TgGHZJbVgyj850BMWl8dalWrjrhWarc7mTcrNRg6TcXdNr%2FqTtJrceZriLa%2BI36CR15KIXpq%2B68fIJGztFoTDrIcbx5DjqqTE%2Bqe2w7FNinQfGgAX1GRZgQtssAa%2BmlKLuURUjAPzLZeBtQwzuzh8047hJk6mgw3fuLKlNXSxauakpJw5d3sNFpB8xGgG0Z8v6PoCXd5yuP2eB9kSX3aTxjLKxw1Kt2cTZNhSb1sA%2BCLVy4i5dZ6SgIkfXVBywTC2yqSaWvkXvoH%2B6ZvNRAf32txNhWc%2BYdOMZDxDzvAnnzYWs7ZEjLUMBKW0glYU2s4cSNN4Duy2qZHCQ0ueaJJ2UJC3QpGx6zS8Jnr%2BFIInQwXe5LFH98xdCVGmMymUMZrMYtcj3BhuFvto9EG58XMJORxMkGOqUBRMxBZ6sjFEZbufPhbC6XKevC0JsKaSuxI6ONgg8ZtdVh3ltZCK5qzkcgLpKYRWYnNsCKKnVJod6NdQaKuI2w%2F3auNE5nbDd1b0bMT6wJIXJqhtRlfKxJC1NbGLw7Gc9KB0x%2FuGc%2FVNOgv2EElVPxqBvQjaC2YYgxhCysVsGBl6ADMeSpNDuJpMsAC%2Bskfo6uBel6LYEXUMi6elUsFeTvZaVUnNPY&X-Amz-Signature=a0c25fc544453d40d8ff558208bb5911599be530ac00d3368dac6c942af3768b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCQBRR7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICCtMwXkRRBc1DhL6fctBQtjHKlEScAzsJHlOD8rndurAiEAnHax0JtQoZDgL7rvPeU2iIRcSShKaK%2BEHNoCae2s5tEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOtXDnLnd9%2F8CDQu2SrcA3DauuBT6VF4zhPMKrVF%2B5zfE0SF0EOeT%2FbBZbNQwgA0Si9ykhjPaD2uRPn%2F7lYsb2ZxiBH%2BXferWDpKZh%2FlUZeM4bucjk%2BjNzvd8s1HewF84gFRBRfldGltmr4Yk3pPa6VdRp%2Ft4bL0Lq7Lb89faulaDVmtLYVzw%2B5ysk1EP2ogExb84gtpnN%2Bd5PDP14cLT6XG3P2RPbDxrB7OLauYh6vufSbp1MCcGJfXOl%2F%2B5TgGHZJbVgyj850BMWl8dalWrjrhWarc7mTcrNRg6TcXdNr%2FqTtJrceZriLa%2BI36CR15KIXpq%2B68fIJGztFoTDrIcbx5DjqqTE%2Bqe2w7FNinQfGgAX1GRZgQtssAa%2BmlKLuURUjAPzLZeBtQwzuzh8047hJk6mgw3fuLKlNXSxauakpJw5d3sNFpB8xGgG0Z8v6PoCXd5yuP2eB9kSX3aTxjLKxw1Kt2cTZNhSb1sA%2BCLVy4i5dZ6SgIkfXVBywTC2yqSaWvkXvoH%2B6ZvNRAf32txNhWc%2BYdOMZDxDzvAnnzYWs7ZEjLUMBKW0glYU2s4cSNN4Duy2qZHCQ0ueaJJ2UJC3QpGx6zS8Jnr%2BFIInQwXe5LFH98xdCVGmMymUMZrMYtcj3BhuFvto9EG58XMJORxMkGOqUBRMxBZ6sjFEZbufPhbC6XKevC0JsKaSuxI6ONgg8ZtdVh3ltZCK5qzkcgLpKYRWYnNsCKKnVJod6NdQaKuI2w%2F3auNE5nbDd1b0bMT6wJIXJqhtRlfKxJC1NbGLw7Gc9KB0x%2FuGc%2FVNOgv2EElVPxqBvQjaC2YYgxhCysVsGBl6ADMeSpNDuJpMsAC%2Bskfo6uBel6LYEXUMi6elUsFeTvZaVUnNPY&X-Amz-Signature=f191c3a4a59507fa6025ed7321587adaf86b8fa3e2a5b8bf23ca9fc728461cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

