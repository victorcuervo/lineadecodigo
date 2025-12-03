---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3Z62VO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCgLQbsyA1qTIKO%2FKOu5L9OSlJh3nyuz7IJ16i86cmwRgIgQ5Wgvzqw2d8oljnqTEuWKj%2Fjo11wGR5MunUJiTcJQkEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9GOJRXk4hT%2BKBj7CrcA9NbGrPCXEkwfbuK1smRO0UV5ZcEFMxfkE3RcFCveCzX87WpeOgQ2XLTA5UAeL3BxgNzfCeqWVCn%2FlA47JQeKwQieUjMCXpOgLxukBwJpP66SerDqgs%2FIoSgxXXHLMlD6FumetIowQPqwJ7RAoeNxJq%2BSgQnlzhSvnKTTnQhsgcOZdVmNaAq%2FiNhf0COuhI3ezB2%2Bq0Qt8QZYCbD%2By5%2F1MAMzpIcDz%2BCl8%2FdzDB%2FBUrHfrDtNPi9d5116pMRE%2FzUQE3iVegPgmJmBmDUHFOS5BmKoGgA3gx4WILcKhuLON6e6%2B1Qiy%2BLCJIexNdCgbLTrG4UKHFybG2fJDHns9Nwwqg6e6ue7l4635ocsEDHkzuCwB9NJHw5OnpMZ1HCd9JEsiny739F8JF7SIYFaXMzM3eHdFS0OR8ydfEh8cFkJKL9l1gFyoYrRN0rBvio3%2By0IsyyoArKDC7f1H6Z%2FaOvyTr6uYv%2BO9gQWX6%2FtNdfNduaTcj9nAFpIuSXn6%2FkA%2F8sLHlggZk%2Bzvpoijk4jplJzCnY5l4OZP52xKCRqry9ghTcyGiNECSGjVX51ujoynisJ04TIxsBLhL8xX0Bbwht88FVO3tuaZubsArRWXU5nO4MPtBKsvAksJuJ1nudMJ%2F%2FvckGOqUBd11ZpSuV8o2aLPx8RKR66Xr79AFXksmgmeZYcjRBE0WVH6z6f9RW2pROjdwTpcr6pmqVOzYbXSju0fM4Ipf1S8ItgWBMQtFoKpmFnYcg8lJW%2FT7PVvzwC3hm%2FrKExPOFVnzD8Z4lhoqzqRAuhIhD%2B4pXYHXQaxBV5hSRbzSwSPbt%2BXwYJbOB11j2AerbK1fhwj%2BPlm%2BSd2fllqIjp%2BKzREOfn%2Bsl&X-Amz-Signature=a691122d678e7a3417a267eaabc5e788743a3dc423b7f662e157a43517a1af87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3Z62VO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCgLQbsyA1qTIKO%2FKOu5L9OSlJh3nyuz7IJ16i86cmwRgIgQ5Wgvzqw2d8oljnqTEuWKj%2Fjo11wGR5MunUJiTcJQkEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI9GOJRXk4hT%2BKBj7CrcA9NbGrPCXEkwfbuK1smRO0UV5ZcEFMxfkE3RcFCveCzX87WpeOgQ2XLTA5UAeL3BxgNzfCeqWVCn%2FlA47JQeKwQieUjMCXpOgLxukBwJpP66SerDqgs%2FIoSgxXXHLMlD6FumetIowQPqwJ7RAoeNxJq%2BSgQnlzhSvnKTTnQhsgcOZdVmNaAq%2FiNhf0COuhI3ezB2%2Bq0Qt8QZYCbD%2By5%2F1MAMzpIcDz%2BCl8%2FdzDB%2FBUrHfrDtNPi9d5116pMRE%2FzUQE3iVegPgmJmBmDUHFOS5BmKoGgA3gx4WILcKhuLON6e6%2B1Qiy%2BLCJIexNdCgbLTrG4UKHFybG2fJDHns9Nwwqg6e6ue7l4635ocsEDHkzuCwB9NJHw5OnpMZ1HCd9JEsiny739F8JF7SIYFaXMzM3eHdFS0OR8ydfEh8cFkJKL9l1gFyoYrRN0rBvio3%2By0IsyyoArKDC7f1H6Z%2FaOvyTr6uYv%2BO9gQWX6%2FtNdfNduaTcj9nAFpIuSXn6%2FkA%2F8sLHlggZk%2Bzvpoijk4jplJzCnY5l4OZP52xKCRqry9ghTcyGiNECSGjVX51ujoynisJ04TIxsBLhL8xX0Bbwht88FVO3tuaZubsArRWXU5nO4MPtBKsvAksJuJ1nudMJ%2F%2FvckGOqUBd11ZpSuV8o2aLPx8RKR66Xr79AFXksmgmeZYcjRBE0WVH6z6f9RW2pROjdwTpcr6pmqVOzYbXSju0fM4Ipf1S8ItgWBMQtFoKpmFnYcg8lJW%2FT7PVvzwC3hm%2FrKExPOFVnzD8Z4lhoqzqRAuhIhD%2B4pXYHXQaxBV5hSRbzSwSPbt%2BXwYJbOB11j2AerbK1fhwj%2BPlm%2BSd2fllqIjp%2BKzREOfn%2Bsl&X-Amz-Signature=b55794a70f656609ba869eaab3aeb16ecffce2c31dc5583ad5911015fca44293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

