---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L633BRB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsi4MM9S4ftS9S0rhDzRxiW7SvBxUqb0U97vQ4g28lGwIhAJNLG%2FmTSLm%2BoC55IX9CvmSHzV2l0jo27gzwHU5%2B3kcqKv8DCGAQABoMNjM3NDIzMTgzODA1IgzmcckdztmP27XTdX8q3AO0p75mqLwF7QnZpbW1T6vFKhdfFlQlW3GaWktV66j4BfsYWPSCxdraTVmUU8wZRPkc8M4B0wamJPnl8vt3J0UyyjO73p0XQDIF39B1ILg%2FxDumv4hVWZOufMG8v3%2BSqnLzMTKKSoGVsM%2FuD9PWIJDDKOVLnASVxP%2BXjOlnRWToSndba1GxQRhbE32K2rKoQDxrIjE3Ghb8C%2BgmFTZ2k7wtEe2BJ0%2B4%2FW7tUPX4ABrA96IaM8qOgFNL6Efza0JZwt2Fi9rKJwgf5FSOe%2BdDCNF1EBH5I0I5Jxhu3poMjRzHClRZFFwdaA%2Fs5XSuqKlOkBI5H%2Fof9%2FVLuOxSupsKAyWEplegk1IWqKPkQj3T2OSgaoAP1AiQCT5YFW3aJGOzYCIEkp4RifaeDRBEglazpdXHTiyiuGWvhExdCMdSH6%2BX0OOCH2hN3thiiTHfTMOt6YaCNF33gYEHJs0AxHeiztwObtmYTB16M2xSw2fQT4jLbP27iJKnF8LzgV7J4qk3ikPcMoBVvuCrnUdftwT7YakTd9bvefoWidhpf4d6Jw9UIDfDCBOSUhs9GY9OCwPVvZ7hAnOdBMVN9AcsKnuvQPEfAPeFu6Zuuq4x2YRSrrj8H%2FysiZsas1oJx9mpfTDE7MvJBjqkAdkHtXxUGM7Xjzg0BtLHMdK2yJCoZP9IqQ2G8QLbnd9dxSM7xjXdz8hkl%2BVXVymNKvBOP%2Ft3NROBmChQRlnegr1ZJsEAcz%2F%2FzWlneFBqPBwF%2FZnMrVAvSvWD4qcn%2F97xchA6DyjcC1lsGVmABXUDQ1y9v%2Bm133i2m1RuY5vbVUPq3tX4ah3b3v13KLBeE%2FekyvSpLxxErBVY8%2FGUfA%2F1DFKc0M8C&X-Amz-Signature=edb13e2e6056af92d2fefbec77f70a417b5d47242511d7301345b8bb64e291ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L633BRB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsi4MM9S4ftS9S0rhDzRxiW7SvBxUqb0U97vQ4g28lGwIhAJNLG%2FmTSLm%2BoC55IX9CvmSHzV2l0jo27gzwHU5%2B3kcqKv8DCGAQABoMNjM3NDIzMTgzODA1IgzmcckdztmP27XTdX8q3AO0p75mqLwF7QnZpbW1T6vFKhdfFlQlW3GaWktV66j4BfsYWPSCxdraTVmUU8wZRPkc8M4B0wamJPnl8vt3J0UyyjO73p0XQDIF39B1ILg%2FxDumv4hVWZOufMG8v3%2BSqnLzMTKKSoGVsM%2FuD9PWIJDDKOVLnASVxP%2BXjOlnRWToSndba1GxQRhbE32K2rKoQDxrIjE3Ghb8C%2BgmFTZ2k7wtEe2BJ0%2B4%2FW7tUPX4ABrA96IaM8qOgFNL6Efza0JZwt2Fi9rKJwgf5FSOe%2BdDCNF1EBH5I0I5Jxhu3poMjRzHClRZFFwdaA%2Fs5XSuqKlOkBI5H%2Fof9%2FVLuOxSupsKAyWEplegk1IWqKPkQj3T2OSgaoAP1AiQCT5YFW3aJGOzYCIEkp4RifaeDRBEglazpdXHTiyiuGWvhExdCMdSH6%2BX0OOCH2hN3thiiTHfTMOt6YaCNF33gYEHJs0AxHeiztwObtmYTB16M2xSw2fQT4jLbP27iJKnF8LzgV7J4qk3ikPcMoBVvuCrnUdftwT7YakTd9bvefoWidhpf4d6Jw9UIDfDCBOSUhs9GY9OCwPVvZ7hAnOdBMVN9AcsKnuvQPEfAPeFu6Zuuq4x2YRSrrj8H%2FysiZsas1oJx9mpfTDE7MvJBjqkAdkHtXxUGM7Xjzg0BtLHMdK2yJCoZP9IqQ2G8QLbnd9dxSM7xjXdz8hkl%2BVXVymNKvBOP%2Ft3NROBmChQRlnegr1ZJsEAcz%2F%2FzWlneFBqPBwF%2FZnMrVAvSvWD4qcn%2F97xchA6DyjcC1lsGVmABXUDQ1y9v%2Bm133i2m1RuY5vbVUPq3tX4ah3b3v13KLBeE%2FekyvSpLxxErBVY8%2FGUfA%2F1DFKc0M8C&X-Amz-Signature=6a356cb77b7cb25bbb43e223bbdf150929ffa00b21f8471b29aa96b592c266f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

