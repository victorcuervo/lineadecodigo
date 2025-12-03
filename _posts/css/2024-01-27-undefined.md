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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDNMQZC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC36ufFKlA6dV9L0JB0CiZsipVjD%2Fzi2mgr2Ttin1s2xgIhAOUSefx4UZNNZF%2FsGr0woKDBYAQnC%2FfCTYV%2F36J%2FGZ29Kv8DCCIQABoMNjM3NDIzMTgzODA1Igzwb4Tw87ifMfYOJx0q3AOAE7i%2FnjYwKem%2B0rgwVZvDRP%2F58O3jKO83Xpsggx95HGA7poqKwDTPXUCuRgE5ug2USaKZ0rv2k5Dm2cu0xUMmQpjOI0E9sVlNMxMw%2Bv7aoXoEpb63VgMH0jYpJbRYBwlqlAW7Mz6bkX%2B9hmDdFgx5Rje5mLN2n1FewfpVRFonJ%2BlfHogfFvx5poIbg2ne%2FrTDL%2FVYJ6bLJYi1wUuLTrgL4%2BTifx6MwZ7ZfneT8LEICcW0pxPr92ISdXCmbyrGmRtKzq2FwsBdyWkIPsEf3mWmH3raaMmk6ea9%2FuIQdh0TGCMO%2BwDOA9IxCr2AlSmzatTgqF%2FteIjaK6Wd4VyRNpbcjbe7PBBBvuwR94nBjXoscED7uyv%2FnviRsgi2c32pwH9EKh3P%2B0VVVaM%2BZTIBRLMFEDkb1qRzQhcBqBljYDJSALchMdysRnst62QjXUxK2cDvjixMQ9fgTsarAimOHAWvfLuzbePPF041c1LAi2Ymcxz3eF7%2BMmnG6n2wfFVeFpvMyDqwQ%2FgaumzpT2B8ckskeuCBcuyzcNpQkBC4tMEaHJOksvSkT3KK2xZcc%2BhVcFjwNdjWLkeUOltmgORcEvXaSD8rRXUyIrefAcV3B3yaEGThe8qTm4Pj3M91NzDBlr7JBjqkAcFs3qZ8cdzZt8BO0YKli2TL6iERVfVZQGwaqg5nKdZaiPl9ZwT3TRz1lFjt7oMeAG6bSKHd8MDjY6yXQyjWAdxricMRQBLdmXAuEHqJYTh5%2BhxR7vFz1UarMh0bPn4um4rEmoH9zgAN8t9XeF%2FjdK%2Fk%2FoMwi6tjea3py7X%2BOdBVJ2uQdaeLxHtwv0lGck3Mu5iqV7bR%2ByeaE5buGjusGv%2BoO2Cf&X-Amz-Signature=974ddf94fee68fb37a67149acc64e33605a023247c5241277b0ab5a7b141d0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDNMQZC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC36ufFKlA6dV9L0JB0CiZsipVjD%2Fzi2mgr2Ttin1s2xgIhAOUSefx4UZNNZF%2FsGr0woKDBYAQnC%2FfCTYV%2F36J%2FGZ29Kv8DCCIQABoMNjM3NDIzMTgzODA1Igzwb4Tw87ifMfYOJx0q3AOAE7i%2FnjYwKem%2B0rgwVZvDRP%2F58O3jKO83Xpsggx95HGA7poqKwDTPXUCuRgE5ug2USaKZ0rv2k5Dm2cu0xUMmQpjOI0E9sVlNMxMw%2Bv7aoXoEpb63VgMH0jYpJbRYBwlqlAW7Mz6bkX%2B9hmDdFgx5Rje5mLN2n1FewfpVRFonJ%2BlfHogfFvx5poIbg2ne%2FrTDL%2FVYJ6bLJYi1wUuLTrgL4%2BTifx6MwZ7ZfneT8LEICcW0pxPr92ISdXCmbyrGmRtKzq2FwsBdyWkIPsEf3mWmH3raaMmk6ea9%2FuIQdh0TGCMO%2BwDOA9IxCr2AlSmzatTgqF%2FteIjaK6Wd4VyRNpbcjbe7PBBBvuwR94nBjXoscED7uyv%2FnviRsgi2c32pwH9EKh3P%2B0VVVaM%2BZTIBRLMFEDkb1qRzQhcBqBljYDJSALchMdysRnst62QjXUxK2cDvjixMQ9fgTsarAimOHAWvfLuzbePPF041c1LAi2Ymcxz3eF7%2BMmnG6n2wfFVeFpvMyDqwQ%2FgaumzpT2B8ckskeuCBcuyzcNpQkBC4tMEaHJOksvSkT3KK2xZcc%2BhVcFjwNdjWLkeUOltmgORcEvXaSD8rRXUyIrefAcV3B3yaEGThe8qTm4Pj3M91NzDBlr7JBjqkAcFs3qZ8cdzZt8BO0YKli2TL6iERVfVZQGwaqg5nKdZaiPl9ZwT3TRz1lFjt7oMeAG6bSKHd8MDjY6yXQyjWAdxricMRQBLdmXAuEHqJYTh5%2BhxR7vFz1UarMh0bPn4um4rEmoH9zgAN8t9XeF%2FjdK%2Fk%2FoMwi6tjea3py7X%2BOdBVJ2uQdaeLxHtwv0lGck3Mu5iqV7bR%2ByeaE5buGjusGv%2BoO2Cf&X-Amz-Signature=587b3f891bd73b7d030318c6f358febab804a6c5fb39d4b2f3db9493199a8385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

