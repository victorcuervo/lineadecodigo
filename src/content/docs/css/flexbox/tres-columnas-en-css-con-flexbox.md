---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABRC2Z2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOjk%2FCNmZGkf7BpqDj9FRUuMMA1N9EpQkFO6jUdhFg8AiBEKgCJLCorMqz4GJWzJ5xSc0sgw28OcML2Wjg5TmNqeiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHNOuA0lRv2rbCQb5KtwDZA7Q%2BDSJMW2WiACumHjyV5E68ZyOncXlSWnkzZJ2b2zxATuo8ig6xo%2FEMFcGxv8ayiYHFWuBhX8tc04K4MpWsh03rixn%2FxvRVyBEPSphHWkjp13fBt85pxnwGe50Tq9pJXfrGOokqjmEZ%2FutELbtTOt11SgqqC6%2FNkNBR15l%2BDuqje7mZPuecD%2FmPAGeKrYSkrOy%2FptncDPHA6h9bp6FZARYGBtS8Fk5sXCoe7srX1aQ88gcvNemMuNGc6HwjsQ6iGY0nRZ7zCqS5%2FkXmihuKuWhF8i8d3eNBiRDo8oTQn5ypLsmrJPNsyyY%2Bm7mq5geANOEHRWIe1uw2st2bNk%2Ffc0tlr%2BCUlax3edtlZ%2Foja1LmtlHgSmzNB%2F%2BIsMXgbrlOX%2FyBlItm7ZVJAl0YGuJpAbMU6shDfPXoHbK6%2FB%2F1nCH5A5l2xZ6aSRy313wBvgOee%2FLEONDEGW%2B5iyNT9%2BXUEj4T3l0gfx%2Bn9glKBINpZQpUZXbiGdUxBJBcWE2kUGXV75xDZ5qE3%2Br2vzrXLZNiSerFQZ2P5dNIEzDBG%2B%2F85U1RNs425IUFxAD5sVveyIpcegzCGdjKPpKRzZy01k0H9LNYfOi8w28Pe5C78UE40e5LMz1xVANzPUGA%2Bow9pTZyQY6pgFVbFUA6Pxd147Vg6Igb1XxUa58VMD%2B8U27kXVLqdx0z85ga3yjP703lX534bPLTShAqkCRjrTDhOSXgCo%2FrwiZ3B8IYR0eWb24dUNTalIhxOVwo7xa87ABsPs3kUo%2FM9yabBKq64YD3kzwuXIdlPzFrjVUp%2FJACYk%2BsAV42tsT2kA0j93e04Lq0fQrogOCuh0cO%2FFfeA4fd1iUvVLm4hzeqJZ%2FPLda&X-Amz-Signature=f3705d19f837f6d8304aa8a1a58b0b0c9a995ebf7ab157a5d243fc8aebf5f796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABRC2Z2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOjk%2FCNmZGkf7BpqDj9FRUuMMA1N9EpQkFO6jUdhFg8AiBEKgCJLCorMqz4GJWzJ5xSc0sgw28OcML2Wjg5TmNqeiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHNOuA0lRv2rbCQb5KtwDZA7Q%2BDSJMW2WiACumHjyV5E68ZyOncXlSWnkzZJ2b2zxATuo8ig6xo%2FEMFcGxv8ayiYHFWuBhX8tc04K4MpWsh03rixn%2FxvRVyBEPSphHWkjp13fBt85pxnwGe50Tq9pJXfrGOokqjmEZ%2FutELbtTOt11SgqqC6%2FNkNBR15l%2BDuqje7mZPuecD%2FmPAGeKrYSkrOy%2FptncDPHA6h9bp6FZARYGBtS8Fk5sXCoe7srX1aQ88gcvNemMuNGc6HwjsQ6iGY0nRZ7zCqS5%2FkXmihuKuWhF8i8d3eNBiRDo8oTQn5ypLsmrJPNsyyY%2Bm7mq5geANOEHRWIe1uw2st2bNk%2Ffc0tlr%2BCUlax3edtlZ%2Foja1LmtlHgSmzNB%2F%2BIsMXgbrlOX%2FyBlItm7ZVJAl0YGuJpAbMU6shDfPXoHbK6%2FB%2F1nCH5A5l2xZ6aSRy313wBvgOee%2FLEONDEGW%2B5iyNT9%2BXUEj4T3l0gfx%2Bn9glKBINpZQpUZXbiGdUxBJBcWE2kUGXV75xDZ5qE3%2Br2vzrXLZNiSerFQZ2P5dNIEzDBG%2B%2F85U1RNs425IUFxAD5sVveyIpcegzCGdjKPpKRzZy01k0H9LNYfOi8w28Pe5C78UE40e5LMz1xVANzPUGA%2Bow9pTZyQY6pgFVbFUA6Pxd147Vg6Igb1XxUa58VMD%2B8U27kXVLqdx0z85ga3yjP703lX534bPLTShAqkCRjrTDhOSXgCo%2FrwiZ3B8IYR0eWb24dUNTalIhxOVwo7xa87ABsPs3kUo%2FM9yabBKq64YD3kzwuXIdlPzFrjVUp%2FJACYk%2BsAV42tsT2kA0j93e04Lq0fQrogOCuh0cO%2FFfeA4fd1iUvVLm4hzeqJZ%2FPLda&X-Amz-Signature=5add8b227b8367ffe9090b48d6b1e95ea570154b92e6d04e737f6b285ba32587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

