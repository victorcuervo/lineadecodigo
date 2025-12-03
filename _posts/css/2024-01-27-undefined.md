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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVP5KHAM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIG%2FE6WKyd5PC2arHcSpCiFmAfFZ8asC4X5ep80zXJUnSAiA9jL4dycWj5gnrdXH7XRrleFleSLt2dlNisKiI4bqjEir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMuekboLGxOAdfudoWKtwD75jzfcgFl0MPShPzt%2B1mjc3cZxETBEG5BxCou520nBeNpVlrUicbvuEL26c5ZqmYsyg3lQqh7i0WTZ04MBnQORhoKW1i3GcrhPB2z6Xwh22qNkuIH5bNrYTtKwvEeyF8%2BHTnHjAY1OxIvTNI%2F8jMnKMGnqQyAx%2FOG8CNtapiI7Htt4VsFoSijYGEIxHLLQ1PSoq%2BVsMZKT%2Bm51WhxpdbbtyU0UFqB7yyQYcVaA4490mLtrbTdo3WyCNe1E0zklliD7L%2BL4ov%2BwKumLqDpKgFlwl4d8O4QLAZru6eSnV9xVamrJ80Y3vkpBy%2Botsb8sUJ5zZs20FIx9FWuKF0EnZN8XTNChVGtCrfrH8Alxwy6UD6vIAnz68mW1f%2B3FYV26VjNahv8NGkt%2BdNaGRpcOKSFnQEoL5wRDvRpGhmHkssdykHqS5xdUfOV7csLs6xYaLmh4%2F4YODAQ4Io2VqAh%2FM%2BdPKQ2uLqAeTJvEMHbM2mKAS%2FoV12Nhjm%2BilRhlkuDby%2BbRute76bome%2B2%2Fxaedhz2AmrI4BEtpuDEXMLq%2BosbCga3O2iQQCxBeHHpuSKV0WKqwuw6sICO%2Bl7mEpkuarXMOqQN8X1%2BvS9BfV81djo%2Fc%2BbOBpyhohrjrp%2FFQQw9dS%2FyQY6pgFXD17KJYUvPRq3B1dSolCIgIjsq2pbk%2BqNytJWXC8BuKaub7StU0Mldil%2FKaBGoz4IyjDAIXXaRLVCo9VRUqEyENaHPfjpN4efpOoixhV74tV54csOaGkp1Azx5kOcLJ4m1SX5Csk61TT2HwtaCSBQIQzh10TptoIUg5ir1IjHtMmpnOf0HxPjvUFoXxBMj%2Blao6i5jjxs0XRyZk5I4rBU5Jk3m0gO&X-Amz-Signature=2700e7ca80ac3af778fdfdcbe6df5c0a63aecb3ec81e11296be4893d478159b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVP5KHAM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIG%2FE6WKyd5PC2arHcSpCiFmAfFZ8asC4X5ep80zXJUnSAiA9jL4dycWj5gnrdXH7XRrleFleSLt2dlNisKiI4bqjEir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMuekboLGxOAdfudoWKtwD75jzfcgFl0MPShPzt%2B1mjc3cZxETBEG5BxCou520nBeNpVlrUicbvuEL26c5ZqmYsyg3lQqh7i0WTZ04MBnQORhoKW1i3GcrhPB2z6Xwh22qNkuIH5bNrYTtKwvEeyF8%2BHTnHjAY1OxIvTNI%2F8jMnKMGnqQyAx%2FOG8CNtapiI7Htt4VsFoSijYGEIxHLLQ1PSoq%2BVsMZKT%2Bm51WhxpdbbtyU0UFqB7yyQYcVaA4490mLtrbTdo3WyCNe1E0zklliD7L%2BL4ov%2BwKumLqDpKgFlwl4d8O4QLAZru6eSnV9xVamrJ80Y3vkpBy%2Botsb8sUJ5zZs20FIx9FWuKF0EnZN8XTNChVGtCrfrH8Alxwy6UD6vIAnz68mW1f%2B3FYV26VjNahv8NGkt%2BdNaGRpcOKSFnQEoL5wRDvRpGhmHkssdykHqS5xdUfOV7csLs6xYaLmh4%2F4YODAQ4Io2VqAh%2FM%2BdPKQ2uLqAeTJvEMHbM2mKAS%2FoV12Nhjm%2BilRhlkuDby%2BbRute76bome%2B2%2Fxaedhz2AmrI4BEtpuDEXMLq%2BosbCga3O2iQQCxBeHHpuSKV0WKqwuw6sICO%2Bl7mEpkuarXMOqQN8X1%2BvS9BfV81djo%2Fc%2BbOBpyhohrjrp%2FFQQw9dS%2FyQY6pgFXD17KJYUvPRq3B1dSolCIgIjsq2pbk%2BqNytJWXC8BuKaub7StU0Mldil%2FKaBGoz4IyjDAIXXaRLVCo9VRUqEyENaHPfjpN4efpOoixhV74tV54csOaGkp1Azx5kOcLJ4m1SX5Csk61TT2HwtaCSBQIQzh10TptoIUg5ir1IjHtMmpnOf0HxPjvUFoXxBMj%2Blao6i5jjxs0XRyZk5I4rBU5Jk3m0gO&X-Amz-Signature=00855ca9e6e1383c9b4343a2dd7fd88b6915211db493e1ca50e4c68bd285a5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

