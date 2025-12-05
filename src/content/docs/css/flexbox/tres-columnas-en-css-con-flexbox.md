---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPKXHN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbYTCWFiZGEqQ6kbEmcqsTOCLco8VXDbOwR3fCHadIGgIgC28ySiKqwwPz8MEhwbltqnMw1nexbVNJqLIsI765c1Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLDNyVe89effY%2F8mxCrcAzdULtngRPAMiBBdKImht4swn6F7QMGsu%2FtU%2Fs84w3ttk8Nv0ezfCv5eNDJSROThiSdc23p9oKHN%2FXZEIC1MaW46eLzl9j9MMT%2Bbn4pBf1eEIwN%2B9sbmDH%2FGRw7DIRWg7iVMQMxuEcmN9BtLBSml0nuSztEQemZBnDOjiJy7YFdbdzubwER3%2FPNj1Ait%2FSi5yYpbHEDG00AoucQOP1D4yUVoUjI771wHyOpHuVlSBc8ycCUWRyEeNSLD%2BxJ5fc9iGuDDHrBAf7EOchRF9FVUlgZHeurO3YKZffX0B3BYi2Lf03Sfh9g9uFB51sUG87EqRm4ytoCMxPuh%2BqEQRRY4LX0D6NncwQKKqAr0fjgC0Xn94%2FDd5OBYtFyMB4gjgpo1F%2FCeEThYZrtyEsCp%2BFtJZrMHvprM6bZHPP8XbtZx4F9S%2Fu0Eve5FFmaKl7l4X2WU5Lfxo3LBYR6ETkTvuoX0fupGy5pvc2OnxnHGr8QpYvYs%2FZrmYWmLafIrqwBwxFgH279becKkVSBOYQwuTFyy7NCWuTcL4bTY%2Fqtnklh86t8SDRipcmsPX5YYL0EVo9DF28P97thcBVqHkWG7bc23imJvFJ76b3BqO30s55v%2BakXoiMqPDjRYAkr059z9MKnNyskGOqUBNN7u2ug8x5tqRqsaT%2BAa%2BqDVqr%2B0Rm3PITFPU4kWW9v%2F%2BzKI15AVitpJLvRDugcbCR6y6gB7nw8uW0zkpCKs3%2B8KfZisJHrzyErHs%2Fqywori1tHdXQM2ojDK57woYN8rwH35Vfjj%2BEEUaDOV3uoj0X%2BaHRnxjI9pi3CxFDfFVWgrdwiKshQJz2aHt%2BMP9xCsZJsEXjwqqznRuhVCCi5wFgoRIDKC&X-Amz-Signature=7098a6edbfe32a42e3872b4dbc0677b7c5fd23e25a312714e84ec5ace419d18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPKXHN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbYTCWFiZGEqQ6kbEmcqsTOCLco8VXDbOwR3fCHadIGgIgC28ySiKqwwPz8MEhwbltqnMw1nexbVNJqLIsI765c1Qq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLDNyVe89effY%2F8mxCrcAzdULtngRPAMiBBdKImht4swn6F7QMGsu%2FtU%2Fs84w3ttk8Nv0ezfCv5eNDJSROThiSdc23p9oKHN%2FXZEIC1MaW46eLzl9j9MMT%2Bbn4pBf1eEIwN%2B9sbmDH%2FGRw7DIRWg7iVMQMxuEcmN9BtLBSml0nuSztEQemZBnDOjiJy7YFdbdzubwER3%2FPNj1Ait%2FSi5yYpbHEDG00AoucQOP1D4yUVoUjI771wHyOpHuVlSBc8ycCUWRyEeNSLD%2BxJ5fc9iGuDDHrBAf7EOchRF9FVUlgZHeurO3YKZffX0B3BYi2Lf03Sfh9g9uFB51sUG87EqRm4ytoCMxPuh%2BqEQRRY4LX0D6NncwQKKqAr0fjgC0Xn94%2FDd5OBYtFyMB4gjgpo1F%2FCeEThYZrtyEsCp%2BFtJZrMHvprM6bZHPP8XbtZx4F9S%2Fu0Eve5FFmaKl7l4X2WU5Lfxo3LBYR6ETkTvuoX0fupGy5pvc2OnxnHGr8QpYvYs%2FZrmYWmLafIrqwBwxFgH279becKkVSBOYQwuTFyy7NCWuTcL4bTY%2Fqtnklh86t8SDRipcmsPX5YYL0EVo9DF28P97thcBVqHkWG7bc23imJvFJ76b3BqO30s55v%2BakXoiMqPDjRYAkr059z9MKnNyskGOqUBNN7u2ug8x5tqRqsaT%2BAa%2BqDVqr%2B0Rm3PITFPU4kWW9v%2F%2BzKI15AVitpJLvRDugcbCR6y6gB7nw8uW0zkpCKs3%2B8KfZisJHrzyErHs%2Fqywori1tHdXQM2ojDK57woYN8rwH35Vfjj%2BEEUaDOV3uoj0X%2BaHRnxjI9pi3CxFDfFVWgrdwiKshQJz2aHt%2BMP9xCsZJsEXjwqqznRuhVCCi5wFgoRIDKC&X-Amz-Signature=91b0672f2d144d65bc97bf3fa577247764901991bfeaa1bc0c403cd2fbc21755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

