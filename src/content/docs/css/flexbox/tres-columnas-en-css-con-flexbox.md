---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZOFWSD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZD5CXcMtIWFGhHO8%2FDo8wDi3sYN1xuFW%2Fz9zwxhR1gIhANFAz9j2qpmLY1HD5nmgHBTWLPCk2Sorkt%2F0%2BxnMyiJBKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbMBA6VouuKJSiU2oq3APMi0eG7Yb4KD2IYqYKcEoroDdkp11wTac%2BCYqiUdngz27BtlJr76DCBVU7hOxUk7cKKM66rGbhL%2Fq70p4Ua1bH9XcDe6urU4%2B2gEBp%2F%2B6GR5kTs2ey36gX0JxJj8IdACSiArnXL95CpdD3zuWFmNqOeWVF1y%2Bkk94aMePGa5UqECIwc0881R2%2BvyKy27vJI3OeoqEbtsly%2B5FHQ8DZQRp8xATXeNaat3uAiEwtkcm32XZqPHz4sKWgNToXTb4CHR%2FEXZ%2B%2BTTSHHiAxUkfxWXpYZ1K6VqxWY0XrWyxZuEY6bDpP4L4uOuyB73n3Nr8cypVBCxqpGX8IA2%2BJ3xpUUKy3wbsh%2BQlMeUz5C7y4JMgXIdRnSNi%2Fiyo405Uu%2FYpfEGXq0SQaOh8wlOqrXORMoc7w3fjXA9Unrrff3KHQN1%2BbVAqjsbZNPqpNO6hYKuBanM9flHdxKoSir0hy5YSoT7gQJKmbG7PxTOauvM3mZbQ23qdPd1BCKRwisnMg0zLCR6E%2FeiPkROvwpLJtUvfgH3UYu5le5W260CZ0N5foSL4FnuJ6tKSZqWYNNKfZQgJ48eHpseDZMcPmWnYUkyxWi9zKqXfdbMMHpzdvEA%2FPi0wk2S5n%2BcHWCGpmY8rhhzCVqNfJBjqkAUavR0UerBab19o%2FmaTVOpKQQBtvVt%2F%2BPSCRR6ju2gftOXz5WX%2FKpOrVaKAadXtmeLDHvAz%2BY2TgC6b8MjUUMDB6QUdB2oepRMaDzDYCMsmAZkSH5yMsVBOUyX9zhDZmTYcTpFVIIHf5smK1UIOBW1rJqiXt8zR15DP0fHbMuVdFKZ%2F26FY32QCa1wab5GgRi49tNmZThYnN2uCZ4tU0GzUeSW3F&X-Amz-Signature=41a743b14952f6a70f04df78951f1ec1dfdb143596d562a26ee09a225192d932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJZOFWSD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNZD5CXcMtIWFGhHO8%2FDo8wDi3sYN1xuFW%2Fz9zwxhR1gIhANFAz9j2qpmLY1HD5nmgHBTWLPCk2Sorkt%2F0%2BxnMyiJBKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbMBA6VouuKJSiU2oq3APMi0eG7Yb4KD2IYqYKcEoroDdkp11wTac%2BCYqiUdngz27BtlJr76DCBVU7hOxUk7cKKM66rGbhL%2Fq70p4Ua1bH9XcDe6urU4%2B2gEBp%2F%2B6GR5kTs2ey36gX0JxJj8IdACSiArnXL95CpdD3zuWFmNqOeWVF1y%2Bkk94aMePGa5UqECIwc0881R2%2BvyKy27vJI3OeoqEbtsly%2B5FHQ8DZQRp8xATXeNaat3uAiEwtkcm32XZqPHz4sKWgNToXTb4CHR%2FEXZ%2B%2BTTSHHiAxUkfxWXpYZ1K6VqxWY0XrWyxZuEY6bDpP4L4uOuyB73n3Nr8cypVBCxqpGX8IA2%2BJ3xpUUKy3wbsh%2BQlMeUz5C7y4JMgXIdRnSNi%2Fiyo405Uu%2FYpfEGXq0SQaOh8wlOqrXORMoc7w3fjXA9Unrrff3KHQN1%2BbVAqjsbZNPqpNO6hYKuBanM9flHdxKoSir0hy5YSoT7gQJKmbG7PxTOauvM3mZbQ23qdPd1BCKRwisnMg0zLCR6E%2FeiPkROvwpLJtUvfgH3UYu5le5W260CZ0N5foSL4FnuJ6tKSZqWYNNKfZQgJ48eHpseDZMcPmWnYUkyxWi9zKqXfdbMMHpzdvEA%2FPi0wk2S5n%2BcHWCGpmY8rhhzCVqNfJBjqkAUavR0UerBab19o%2FmaTVOpKQQBtvVt%2F%2BPSCRR6ju2gftOXz5WX%2FKpOrVaKAadXtmeLDHvAz%2BY2TgC6b8MjUUMDB6QUdB2oepRMaDzDYCMsmAZkSH5yMsVBOUyX9zhDZmTYcTpFVIIHf5smK1UIOBW1rJqiXt8zR15DP0fHbMuVdFKZ%2F26FY32QCa1wab5GgRi49tNmZThYnN2uCZ4tU0GzUeSW3F&X-Amz-Signature=00e6fa76c54078ad43257955231e76f1ac85f740ced2ff1a7a0fe760be00c401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

