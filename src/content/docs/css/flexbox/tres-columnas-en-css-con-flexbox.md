---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUMOSVW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlOaTEgUefr3cPgssQmva7j3dKbeBtQBaNdTb6ZptUxAiB850tCxyTTKiGOb2vGWCYSXoraEGuSSPO6%2F1L8D6Ricyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1zgSCii10BH7BeGHKtwDbefz6ijxWs3i9x9fcmU1kRzC0c5K4q1mFabCXAdyyri%2Bh3EQ1lBXubEvuhPyIAL4pklFCkV7Fhff%2F%2BZmuV8hd9yCL%2Ftu%2BASPRqV21elnm2YsIMBlVVbRtSFJKILi1YJT%2Bvbq8qkQXolcslj0qUcVnvpRP7XeyYDwFDg8ILOpo5upkhnv1vns0xIk8xAbPAD7qZCTE8eaNjoAbql4ab9KpsifWIZwunkHpKP0%2F5akXOO9C264LUJRmVutYuEt%2BjtwRVhVQmoCxCXw9XfIwAvC05C5rCJiVDnpo48dCX0ZKwq0xl1RqIGYc7Db62EwV2dOk%2FY5QzZ6oLZ8LZnWJuJQ1K0U6xpmL8mRla8BpeeEgRzR8eWJ4JO8BNhN1ByT2Ntj54Ls2Z0zelqR4vRTbWYfjca9JNDewxm30FSpwJAMGJaaRNVReYZ%2FIKgyHzeiGLZKjIXKNF6Vfjo4xeGAnBFpMnlad9Mz%2Fr9q43nZGFioc%2BkpKKtUH2I2%2FnymDxgwuvW48cgxBV%2B%2BbqGxUBCS6gy0T5Eh4SzGnn1fXsgPIjtwcCR1G6VX1DS6inH9sRf0Pf8Ld7cnw48wfCN1mDny4hFz6yS4qMD1FV9kAKCm%2FrSr2ckP0CL0pe8Ghy2Ca4Awp67JyQY6pgF7QG7g1yuj5kXsVX4m70gqjRL5kxcrBvMhsG%2FLHekcIz3KcxIq4y0sfwW37W%2Fj8B5lp3mQsa7q0PhcwmpqQf1QIt6jF0KT83FhWi%2F%2BSqNsuYNnuRQEdix5BhcVWwVoa%2FsyNkc9v7zhCYNZrvblYeOQrx6W%2FV9qkrBixmkc8jNsTGLKp6js3aox3xk3JyG1f1D%2BIMdDmmEwY0MsoZqxNGLPg9ui83KI&X-Amz-Signature=8ae5fa7eeac68938d2c56663d37e772b40c81aab568bd0205235ff5805cf8b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUMOSVW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlOaTEgUefr3cPgssQmva7j3dKbeBtQBaNdTb6ZptUxAiB850tCxyTTKiGOb2vGWCYSXoraEGuSSPO6%2F1L8D6Ricyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1zgSCii10BH7BeGHKtwDbefz6ijxWs3i9x9fcmU1kRzC0c5K4q1mFabCXAdyyri%2Bh3EQ1lBXubEvuhPyIAL4pklFCkV7Fhff%2F%2BZmuV8hd9yCL%2Ftu%2BASPRqV21elnm2YsIMBlVVbRtSFJKILi1YJT%2Bvbq8qkQXolcslj0qUcVnvpRP7XeyYDwFDg8ILOpo5upkhnv1vns0xIk8xAbPAD7qZCTE8eaNjoAbql4ab9KpsifWIZwunkHpKP0%2F5akXOO9C264LUJRmVutYuEt%2BjtwRVhVQmoCxCXw9XfIwAvC05C5rCJiVDnpo48dCX0ZKwq0xl1RqIGYc7Db62EwV2dOk%2FY5QzZ6oLZ8LZnWJuJQ1K0U6xpmL8mRla8BpeeEgRzR8eWJ4JO8BNhN1ByT2Ntj54Ls2Z0zelqR4vRTbWYfjca9JNDewxm30FSpwJAMGJaaRNVReYZ%2FIKgyHzeiGLZKjIXKNF6Vfjo4xeGAnBFpMnlad9Mz%2Fr9q43nZGFioc%2BkpKKtUH2I2%2FnymDxgwuvW48cgxBV%2B%2BbqGxUBCS6gy0T5Eh4SzGnn1fXsgPIjtwcCR1G6VX1DS6inH9sRf0Pf8Ld7cnw48wfCN1mDny4hFz6yS4qMD1FV9kAKCm%2FrSr2ckP0CL0pe8Ghy2Ca4Awp67JyQY6pgF7QG7g1yuj5kXsVX4m70gqjRL5kxcrBvMhsG%2FLHekcIz3KcxIq4y0sfwW37W%2Fj8B5lp3mQsa7q0PhcwmpqQf1QIt6jF0KT83FhWi%2F%2BSqNsuYNnuRQEdix5BhcVWwVoa%2FsyNkc9v7zhCYNZrvblYeOQrx6W%2FV9qkrBixmkc8jNsTGLKp6js3aox3xk3JyG1f1D%2BIMdDmmEwY0MsoZqxNGLPg9ui83KI&X-Amz-Signature=e602da86a2a1603cb966cbdb6dc673cc219cd3bd9d11dd921b094529d59410f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

