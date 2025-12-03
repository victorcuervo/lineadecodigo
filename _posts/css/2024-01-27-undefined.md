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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC7K7YN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIA3DLfv27eol%2BdV3jC72Qs5Gzgm6FMLeANVg2DXS9kgdAiBRu4P%2ByPfApF%2F1tmvbMZJY1PwZqWzE0CA7G8eav5%2FHuCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM4FC%2BtwfpKFGmOUDaKtwDZjTCHcWdTSZ6QRz1deTDFvdqJ3fVRZ1WY3vTn%2FGyJXXWtV%2Fj7uljoVUWzbwRH1nEPFuIJ4huecZUse%2BNYSkSqRgsKMtDrPz2onAeFOxZ7AI7GkQuVIgsBFebfp2RPgxeHarCL3W5140dYT8Au723oFFxZ4Bm%2F12ljZJh7%2BupGJAPSNMQXbfVjDE2RolmHejhTyKeswn7%2BacNgPKFEkjiS46Veugfy4f8F%2FSrOp7MYtuSYCfp2RuCH1byYA8UpdgaX8zJC%2FfVGmZUn1yHyR6315f3H8fqkBbJk%2BI4w9tZ%2Bt1%2BTZ7WukrE5iZJ%2BhOGg2A7dLfzlwju20Egdb%2B046HOq8oP7zDCZWotvpT5QR9Tfzip3Db%2BqQcBVyuoZiqmCqrUjAv8k0DKajX7HxAg%2B4M%2BdQbjq20SUaiLJULUx6He%2BiIPoIzC4kKaSVNhkQtDbKso3E0spvHadtxQ3WsJQ67fK9UKi3i0gJQxbgMq3UZYZ5F4l0hipv96cnBcZ0Nish8E8Dx1DWGGGKxCQShztt%2BCj1uhrcrnkBRlzHqdLppNIraLsrm6ceuc%2F3JTZqB6hSTfuAQ53KBChcN9wthWAUe2LZMXWhmO3URUWPdHFCMT5CCTwVu5FDflEL38%2FZEwzabByQY6pgGWJNtBvaLCKTbyTtuyYzpnURAYOiE73o7TPEX4zA999gdqcJqftLx%2BQqXwG1HnVLu1o7wCyuXeG5eCuBIC%2FeeWBZgr3xjbcVGa3b8A1qtXb0Ask8AjIpylk9jByhW9uu4akgR6CugKUyHa2D%2Fc9KwKTEaY2QefQW9VCrwzK0Tsde7lFp%2Bj58T%2BQKMdsLBajdKTGid1Z%2FFlSLMGRqiXMNqF%2Fn8%2Fr5dT&X-Amz-Signature=d88cf4aa7ee4914a23272cdcf402fcfa708399e3a29bcd4de2462f9f4a076e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PC7K7YN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIA3DLfv27eol%2BdV3jC72Qs5Gzgm6FMLeANVg2DXS9kgdAiBRu4P%2ByPfApF%2F1tmvbMZJY1PwZqWzE0CA7G8eav5%2FHuCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM4FC%2BtwfpKFGmOUDaKtwDZjTCHcWdTSZ6QRz1deTDFvdqJ3fVRZ1WY3vTn%2FGyJXXWtV%2Fj7uljoVUWzbwRH1nEPFuIJ4huecZUse%2BNYSkSqRgsKMtDrPz2onAeFOxZ7AI7GkQuVIgsBFebfp2RPgxeHarCL3W5140dYT8Au723oFFxZ4Bm%2F12ljZJh7%2BupGJAPSNMQXbfVjDE2RolmHejhTyKeswn7%2BacNgPKFEkjiS46Veugfy4f8F%2FSrOp7MYtuSYCfp2RuCH1byYA8UpdgaX8zJC%2FfVGmZUn1yHyR6315f3H8fqkBbJk%2BI4w9tZ%2Bt1%2BTZ7WukrE5iZJ%2BhOGg2A7dLfzlwju20Egdb%2B046HOq8oP7zDCZWotvpT5QR9Tfzip3Db%2BqQcBVyuoZiqmCqrUjAv8k0DKajX7HxAg%2B4M%2BdQbjq20SUaiLJULUx6He%2BiIPoIzC4kKaSVNhkQtDbKso3E0spvHadtxQ3WsJQ67fK9UKi3i0gJQxbgMq3UZYZ5F4l0hipv96cnBcZ0Nish8E8Dx1DWGGGKxCQShztt%2BCj1uhrcrnkBRlzHqdLppNIraLsrm6ceuc%2F3JTZqB6hSTfuAQ53KBChcN9wthWAUe2LZMXWhmO3URUWPdHFCMT5CCTwVu5FDflEL38%2FZEwzabByQY6pgGWJNtBvaLCKTbyTtuyYzpnURAYOiE73o7TPEX4zA999gdqcJqftLx%2BQqXwG1HnVLu1o7wCyuXeG5eCuBIC%2FeeWBZgr3xjbcVGa3b8A1qtXb0Ask8AjIpylk9jByhW9uu4akgR6CugKUyHa2D%2Fc9KwKTEaY2QefQW9VCrwzK0Tsde7lFp%2Bj58T%2BQKMdsLBajdKTGid1Z%2FFlSLMGRqiXMNqF%2Fn8%2Fr5dT&X-Amz-Signature=880eb3c85d95dc6390d202a33814d8ae53db06db81248f572aff8b431be9d8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

