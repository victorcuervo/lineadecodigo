---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOWYAHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ0tvAgj%2B5eA%2BsmLRbur8C0JZRT5NF5T03AqZETeKhQAiEArAlkMnDGJpwTP2XHPKT93VGUYZOZTCkk58MGT70EDH4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVX7E6l8WRGj6LdFCrcA243WVx1Ra8Hh31a8WzboRmQBM%2B4VuqDhPPsIshvkD440XU2l9BjgbNmIB0qkbm9gka25KE8ZUlEa9VAdFxL6DIGezn41sSBHB%2Bpboku6vxeCJOpTq6k4FYJ2FD31Iok9JlytEmiw86k8WXbRox%2FYaDqE50pbOCI8RnCX4r%2BFf6sl539FTB1AfA%2FxHM0m768Iq6b40OjZ9AarIPubxgEGF1vxGMUFDFH0rtolbDxPOgqxJxiI3%2FhM8Gku6zvrJes1D6oXM7OqgJO2eDg%2F1RAXerp3e2LCogekVQ4eH6eBf65byWLQzWyQqsh8vjbCeCRJmDO7zc0YDWs%2BJfaa9qMYplrykmvzr2h%2F05CPfu1UGTS7Qgvz5txC02Ri8W165C5AYATh%2Bjd0qXJdc6ujURtLbVyiS6m2RU5%2FM7tEI39WJAj7vLi1sfP2krx6XIKUIA7rvgePxESX6WeDZYlStK1lh%2BfzYcoR2vaB4VvBUXwy%2FFb%2BS0jxm33OCP6U00Wb5VmquzPkuSMLPBr7n5FAZihDV8L34FBd2AABOZImMqvEn8CWNIvb78FYI9kfM6W7I6O3RT6axrSVWpm6i5%2Bz9h9XS6cuNYo0pgsGpZ8snQoZIqEswn9GZeijhQt1r39MIyh1MkGOqUBQO%2BDWMc79hIhzdWFrb4eLoCsz1PebT6sNcy9689xCHrKzPK8PWO1Aly0IXrdiOSSDpu8m%2BC6%2BAqIodoPvcbUq3ickGqQ9TajKEbHJyX0EMfJXsOgCk3t6BGZZ6XMrayPrhzPuefPi1rbnMGB5HzQ0yAjH6%2FKfeLhF9PERdJPZY63HYCdjC%2FsWGtNw6DEE0kynCHUDmvDNwQV3ThGTua7fQxXW7yW&X-Amz-Signature=36a6d012c7c7cfc416930bedc57a5ee96a697916db5b0c199073e964cdeb9ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOWYAHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ0tvAgj%2B5eA%2BsmLRbur8C0JZRT5NF5T03AqZETeKhQAiEArAlkMnDGJpwTP2XHPKT93VGUYZOZTCkk58MGT70EDH4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVX7E6l8WRGj6LdFCrcA243WVx1Ra8Hh31a8WzboRmQBM%2B4VuqDhPPsIshvkD440XU2l9BjgbNmIB0qkbm9gka25KE8ZUlEa9VAdFxL6DIGezn41sSBHB%2Bpboku6vxeCJOpTq6k4FYJ2FD31Iok9JlytEmiw86k8WXbRox%2FYaDqE50pbOCI8RnCX4r%2BFf6sl539FTB1AfA%2FxHM0m768Iq6b40OjZ9AarIPubxgEGF1vxGMUFDFH0rtolbDxPOgqxJxiI3%2FhM8Gku6zvrJes1D6oXM7OqgJO2eDg%2F1RAXerp3e2LCogekVQ4eH6eBf65byWLQzWyQqsh8vjbCeCRJmDO7zc0YDWs%2BJfaa9qMYplrykmvzr2h%2F05CPfu1UGTS7Qgvz5txC02Ri8W165C5AYATh%2Bjd0qXJdc6ujURtLbVyiS6m2RU5%2FM7tEI39WJAj7vLi1sfP2krx6XIKUIA7rvgePxESX6WeDZYlStK1lh%2BfzYcoR2vaB4VvBUXwy%2FFb%2BS0jxm33OCP6U00Wb5VmquzPkuSMLPBr7n5FAZihDV8L34FBd2AABOZImMqvEn8CWNIvb78FYI9kfM6W7I6O3RT6axrSVWpm6i5%2Bz9h9XS6cuNYo0pgsGpZ8snQoZIqEswn9GZeijhQt1r39MIyh1MkGOqUBQO%2BDWMc79hIhzdWFrb4eLoCsz1PebT6sNcy9689xCHrKzPK8PWO1Aly0IXrdiOSSDpu8m%2BC6%2BAqIodoPvcbUq3ickGqQ9TajKEbHJyX0EMfJXsOgCk3t6BGZZ6XMrayPrhzPuefPi1rbnMGB5HzQ0yAjH6%2FKfeLhF9PERdJPZY63HYCdjC%2FsWGtNw6DEE0kynCHUDmvDNwQV3ThGTua7fQxXW7yW&X-Amz-Signature=f0d9a42f8c40fa53fbf497524ac118865ff2729f51c3dd82b8fd4f0366d70788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

