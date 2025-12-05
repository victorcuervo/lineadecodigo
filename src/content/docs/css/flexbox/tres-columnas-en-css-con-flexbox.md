---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKEVULK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLYXgmwWn83Db9gTizaMJ95s%2FbkM398C20NBCgTp8k8AiAfVS1tBOtIrMD7I%2FIXI1tca4oYaF8qJcqURjYym%2FCegSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMGR73kLospQ8nYlKtKtwDDurUm9Lg4bIHB94%2B%2Bwn49RI1RNePNcIp2gTO2qu1hvbOEvRu%2FxZGHCCiPxdZeVny0lxeZb1TE9Op%2FJvVzamC0BmKb5H6ibdJW%2F2IgkY5orZW1qiMwBhIjRWdftYhjQffhSCTp3iN5j8xDFhppQKpNYIn%2B0YaxlYsGBGGwabahQ9QjhHbnRKnDkHDgBNY2OHf%2FtuPVDgaKE1dT8QwdNtFmXqF2xWkMoDFKqedBNf2YGu0NbsEIH82YRTzwfkdjvMulGzd8mn%2FkCsEh1frmWYYv0ydFK0dJwVc2C800QijKv2litTQOqTkq%2B8K39Jdzt3omra9eyp4gXxUE3zQ6iul4RJ1Rz7FGkm681HSgq7A53U%2FtFst%2B3jnegKodDhdLlIJUAU1mhLYNEuhIJYL0998X8zoqEE0cCXByVxs0r1%2FKtBQuPdU5oDB5SPOi2j9sCVuZUx%2FB72KmuIIkRFGrj35hooF1L3F0%2BKA%2F%2Bg2tFxdQbFZYjUNVSjAtqAKAkl9zTHyzcqII4orFyHXAcPxez%2BTd0hKp7F5aHI33WIvf4Tlbi7WRvSPXl3IDXQdi3aabX%2BhgJxzPPAMhxNxhIsLNg4IeU%2FplAKevf36eVz3OIAeGYCQU4KlX0HYTr5SFbIw3%2BzLyQY6pgG4%2FaPLb5cGWJKeKG96DN21fBNelNDXIm%2FKJADDYuXByHmAP7SI4gpzovx0Xbi09OtCjkwpugzELjBcr4pJIkx5EVhy94kLytKGF3JH9r2a3Uhv9O1ps4pSj9%2BE0EsZlCh9b4fJDNiCIcjK7I4xoOBP3IZZGx%2BJxdXHyIdxnQwV0joPxyhBFVsi1Kwz1HJN4WHg8XR8%2BUsXLXYQIjS165i16ulfLGAp&X-Amz-Signature=dca9f0acb05e06e5613912e34b4e1dd28290010de634fa71a6221cda8ef02031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKEVULK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLYXgmwWn83Db9gTizaMJ95s%2FbkM398C20NBCgTp8k8AiAfVS1tBOtIrMD7I%2FIXI1tca4oYaF8qJcqURjYym%2FCegSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMGR73kLospQ8nYlKtKtwDDurUm9Lg4bIHB94%2B%2Bwn49RI1RNePNcIp2gTO2qu1hvbOEvRu%2FxZGHCCiPxdZeVny0lxeZb1TE9Op%2FJvVzamC0BmKb5H6ibdJW%2F2IgkY5orZW1qiMwBhIjRWdftYhjQffhSCTp3iN5j8xDFhppQKpNYIn%2B0YaxlYsGBGGwabahQ9QjhHbnRKnDkHDgBNY2OHf%2FtuPVDgaKE1dT8QwdNtFmXqF2xWkMoDFKqedBNf2YGu0NbsEIH82YRTzwfkdjvMulGzd8mn%2FkCsEh1frmWYYv0ydFK0dJwVc2C800QijKv2litTQOqTkq%2B8K39Jdzt3omra9eyp4gXxUE3zQ6iul4RJ1Rz7FGkm681HSgq7A53U%2FtFst%2B3jnegKodDhdLlIJUAU1mhLYNEuhIJYL0998X8zoqEE0cCXByVxs0r1%2FKtBQuPdU5oDB5SPOi2j9sCVuZUx%2FB72KmuIIkRFGrj35hooF1L3F0%2BKA%2F%2Bg2tFxdQbFZYjUNVSjAtqAKAkl9zTHyzcqII4orFyHXAcPxez%2BTd0hKp7F5aHI33WIvf4Tlbi7WRvSPXl3IDXQdi3aabX%2BhgJxzPPAMhxNxhIsLNg4IeU%2FplAKevf36eVz3OIAeGYCQU4KlX0HYTr5SFbIw3%2BzLyQY6pgG4%2FaPLb5cGWJKeKG96DN21fBNelNDXIm%2FKJADDYuXByHmAP7SI4gpzovx0Xbi09OtCjkwpugzELjBcr4pJIkx5EVhy94kLytKGF3JH9r2a3Uhv9O1ps4pSj9%2BE0EsZlCh9b4fJDNiCIcjK7I4xoOBP3IZZGx%2BJxdXHyIdxnQwV0joPxyhBFVsi1Kwz1HJN4WHg8XR8%2BUsXLXYQIjS165i16ulfLGAp&X-Amz-Signature=74b9b69e0af00af429f452171142acf61d0ca419a384a3aacaf6bbcc448b72e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

