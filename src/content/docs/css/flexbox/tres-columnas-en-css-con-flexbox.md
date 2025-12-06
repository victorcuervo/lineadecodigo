---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72TG3VR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDThFdm%2BdgTUiE%2BZdh6sOR2YkFsMyoaX2Y%2BId3SnafTJAIhAIRvnHQWlSbjH438utM0mcxjKcdUbwcLu2PkrYpzIw%2FAKv8DCG8QABoMNjM3NDIzMTgzODA1IgwBN5RHLhSYbowORtAq3ANRIY5n5pALb%2FEB135VIcyS9kxwpBBMbGaykPoPrn7%2F95JoIyxw7gc4TLs4ck6KsyOyhC6w5mtlIK1aMTffLe1y3O7LrPtz0CmqY1%2FlkAw4sW5ca57krjrfgHye%2FqG2aFV4DFpdUeS94q8DcS9%2FeH0F6slDC9ZYphrm47NfburJMcca%2BAepd1eymm4FH7z5aJ%2FMTL0tXDYMidP8f8PkyhkMHDr7wE9ik1IjxnfTECgDlFRBad3dwhNn0ECJM%2BocdjPsaD9BVLX%2F%2BETIOZA1aV0RgEP5sYkx32MPXMTCQNZj7rQr%2FFR77vV0DLJ%2FY9PZ%2B8IXECFEPzkYKzSJKZxBGn%2B91OGUGEV9tyoxjfvb1KFNkjfADSaUusEi8ObV20bJ72Q%2FEqg7OWFLHNXqohcDX3OmKdrDTxflRWanOPZPzOhfHlyW8ILOvhb5ds22JQ43Wx5EsJfkE4c1XgVaW94axEvpfFdIkVE1i6kl6HV1zWChAml4m2lmVZxtecgLWwDmJFXtbNEkVyUYpsX9%2FGerOXzBE%2B7MnO%2Bi7vsoJENyuogPM70XuBIgTz6jGJMbMOVzJBJtrxnr0SgV3hpBQ6T96828m7Ex%2FF%2B%2BJWIbtYIipIVb3TNcJGuECb1FhrQSoDCS%2Fc7JBjqkAQeTioGzONESmrUWm%2BCGY%2FPmhgC%2FHJFZ49roUey0Q67cHu2XDQPJFMDIJJSPKjPKn9eIs37wU5bgdJtWK4LSvQVCta8recWGC0rCnyx%2Bz%2F%2F2Q3L78CL%2BHRI%2F%2B099zhh1wApmi0%2BfTFM%2BxwQCpkIl7NRMBczvsuytBIkV67Wc7E4yzAc5beqEz6pXUTihvvi6cKS1Gt1Ulu9zgHmo6%2Fj6Hu4JUW0B&X-Amz-Signature=4866487053ba422430cf62e45edad47a8c6b70cbfd822626ffb9b13ac3c1e63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72TG3VR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDThFdm%2BdgTUiE%2BZdh6sOR2YkFsMyoaX2Y%2BId3SnafTJAIhAIRvnHQWlSbjH438utM0mcxjKcdUbwcLu2PkrYpzIw%2FAKv8DCG8QABoMNjM3NDIzMTgzODA1IgwBN5RHLhSYbowORtAq3ANRIY5n5pALb%2FEB135VIcyS9kxwpBBMbGaykPoPrn7%2F95JoIyxw7gc4TLs4ck6KsyOyhC6w5mtlIK1aMTffLe1y3O7LrPtz0CmqY1%2FlkAw4sW5ca57krjrfgHye%2FqG2aFV4DFpdUeS94q8DcS9%2FeH0F6slDC9ZYphrm47NfburJMcca%2BAepd1eymm4FH7z5aJ%2FMTL0tXDYMidP8f8PkyhkMHDr7wE9ik1IjxnfTECgDlFRBad3dwhNn0ECJM%2BocdjPsaD9BVLX%2F%2BETIOZA1aV0RgEP5sYkx32MPXMTCQNZj7rQr%2FFR77vV0DLJ%2FY9PZ%2B8IXECFEPzkYKzSJKZxBGn%2B91OGUGEV9tyoxjfvb1KFNkjfADSaUusEi8ObV20bJ72Q%2FEqg7OWFLHNXqohcDX3OmKdrDTxflRWanOPZPzOhfHlyW8ILOvhb5ds22JQ43Wx5EsJfkE4c1XgVaW94axEvpfFdIkVE1i6kl6HV1zWChAml4m2lmVZxtecgLWwDmJFXtbNEkVyUYpsX9%2FGerOXzBE%2B7MnO%2Bi7vsoJENyuogPM70XuBIgTz6jGJMbMOVzJBJtrxnr0SgV3hpBQ6T96828m7Ex%2FF%2B%2BJWIbtYIipIVb3TNcJGuECb1FhrQSoDCS%2Fc7JBjqkAQeTioGzONESmrUWm%2BCGY%2FPmhgC%2FHJFZ49roUey0Q67cHu2XDQPJFMDIJJSPKjPKn9eIs37wU5bgdJtWK4LSvQVCta8recWGC0rCnyx%2Bz%2F%2F2Q3L78CL%2BHRI%2F%2B099zhh1wApmi0%2BfTFM%2BxwQCpkIl7NRMBczvsuytBIkV67Wc7E4yzAc5beqEz6pXUTihvvi6cKS1Gt1Ulu9zgHmo6%2Fj6Hu4JUW0B&X-Amz-Signature=d6b6c0345d31d6d169192d27f22cc62f1ac115f8b025b19ccef9c89805caccc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

