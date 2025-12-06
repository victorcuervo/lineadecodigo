---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S54TKDMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC%2FR%2Bkgzvz0qhZO54ZkBEWHNPGOY0TrwqV9oYSh5eT6AiAwjgvaA0f%2Bd93h4Y1T1aBrfZYNCC91bRsQNAekTMcNpCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEb9iebgX1UOU4qg7KtwDXNyDLa7jW%2FDzzIw2zSEMqDlBNMopRQtg85me6DcC%2BPz6zUsY8%2B3ZsrHYf2S03z3uEXfZ2Uq4lRukOahCO2Zrj1wCJofMIMmCla8qzI8EnkuXjubRaEZaqgrpDNj9Yfqm1OZbvYBRLISGlaBPKSAGCL0sXZv9ghzORGYQlz2rUqoS12b1eV7YKaEsHZS%2BCwbiJNUwSfkHF%2FPieu6CGPmDyTGEsT%2Bm0MWtZJjiHaxVXPdkUxpeNi3x57JCTj9JBk6JK5m%2FnIlG%2FVyDvUSMei1drv7CGpwlM2rCznjGEJoXsxf0h4iwhzdyzErkRTHSioVjAx8qcWccg5faz6lPHtYm7HouRXYtdFX425lW%2BeRHhmBe%2BTn%2FOs2nTANzFaDpdF%2FZyYXjRbhz6bpEd%2BmwtUYP2FFihb%2F8RH1yQdqJUlgkw6y6qQqzoL1q%2FmWMqcM4mmp45PaTQl0HC5RK5mXchJAiSXh%2BNkX41vesq2eqrZ2aXmo%2FLVFQxH5iTgjkkfGaJ9C6EUgu0P0RPdYHQ4F2%2BzFRbyZo2dIoVBgHHQe7%2BIT22gy%2B5BzytK5L%2B7A3S7hytQ1Hl%2BD%2BK2YzG2dBmsizyCCvxn5fP8LKmjv05JsqLZhu030lQhwMdXkNSZbrdSgwz6bQyQY6pgEWB8p2m5HDxVVwRYies1yslppV6PFuKaiAlhUj9E5Ni6Yy7js2EQ0aT8sIyWn5AktVelDCyQSP2mgBlhiHGwtKqBQtWaf5p9AdoKQQORXSUc4xo4KENjpGq6cQzRavUipjU21sZoFFttEMmAbWBFu13Zyf2tPWdMO7pC9S7J9zjrnGhn92C5pldUO05hf83Xu0YYaYRz9pxZqOdhwghQWBJND%2Bk4Op&X-Amz-Signature=cdd72cbe4be4d2433541bcaf61ddb335ed59cbc34dac4a70263446d6ba241e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S54TKDMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC%2FR%2Bkgzvz0qhZO54ZkBEWHNPGOY0TrwqV9oYSh5eT6AiAwjgvaA0f%2Bd93h4Y1T1aBrfZYNCC91bRsQNAekTMcNpCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEb9iebgX1UOU4qg7KtwDXNyDLa7jW%2FDzzIw2zSEMqDlBNMopRQtg85me6DcC%2BPz6zUsY8%2B3ZsrHYf2S03z3uEXfZ2Uq4lRukOahCO2Zrj1wCJofMIMmCla8qzI8EnkuXjubRaEZaqgrpDNj9Yfqm1OZbvYBRLISGlaBPKSAGCL0sXZv9ghzORGYQlz2rUqoS12b1eV7YKaEsHZS%2BCwbiJNUwSfkHF%2FPieu6CGPmDyTGEsT%2Bm0MWtZJjiHaxVXPdkUxpeNi3x57JCTj9JBk6JK5m%2FnIlG%2FVyDvUSMei1drv7CGpwlM2rCznjGEJoXsxf0h4iwhzdyzErkRTHSioVjAx8qcWccg5faz6lPHtYm7HouRXYtdFX425lW%2BeRHhmBe%2BTn%2FOs2nTANzFaDpdF%2FZyYXjRbhz6bpEd%2BmwtUYP2FFihb%2F8RH1yQdqJUlgkw6y6qQqzoL1q%2FmWMqcM4mmp45PaTQl0HC5RK5mXchJAiSXh%2BNkX41vesq2eqrZ2aXmo%2FLVFQxH5iTgjkkfGaJ9C6EUgu0P0RPdYHQ4F2%2BzFRbyZo2dIoVBgHHQe7%2BIT22gy%2B5BzytK5L%2B7A3S7hytQ1Hl%2BD%2BK2YzG2dBmsizyCCvxn5fP8LKmjv05JsqLZhu030lQhwMdXkNSZbrdSgwz6bQyQY6pgEWB8p2m5HDxVVwRYies1yslppV6PFuKaiAlhUj9E5Ni6Yy7js2EQ0aT8sIyWn5AktVelDCyQSP2mgBlhiHGwtKqBQtWaf5p9AdoKQQORXSUc4xo4KENjpGq6cQzRavUipjU21sZoFFttEMmAbWBFu13Zyf2tPWdMO7pC9S7J9zjrnGhn92C5pldUO05hf83Xu0YYaYRz9pxZqOdhwghQWBJND%2Bk4Op&X-Amz-Signature=e525ebd3204413410178badfef553ec8f60475afd1b65069b62bc7b4e13c27b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

