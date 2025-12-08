---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHZ45VG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5sNS45Ajt2B7PnA4UW8fn3gcffSPhTd8ZMCXWryNbaAiAnRvYX48rM026xWZRkJBquXe5EAjcuXxCP%2F6yPoM9OiSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMffnJW6mUZK%2ByJwjoKtwDehFekx78Iy9thVPEZTX93OXeOnHP9QLuCkJ31j7SGKCbaxpTzkvKzxY1TMDMybJTj%2Fckg4bgeTRuaNa7n7YdyVgVfespFx%2BIoL8E3mzgKDhQcVRyuvaNvE%2B1kjG6xP46R%2Bgem2c%2B%2B5WJwPBEiJmlCDuvR7agPSu%2ByPr%2FQCQELF4VVFoJj82aJgV%2FIhGjKXgrXHgn7ng2lmmnjHGLKrZZ6Uwhd02kGQrC48JgYqhyz9A5aFtC9R1zC4qIRN7IIcn8flqRU13BaeLHht7iJd7UnIMFUpdlluIQqUIWPHdi4UP3Tk02RTXFsjoy7tifld0jTjU7NwSNqnqVhw3izP5iM2ZQyABNpLkcrPA2%2Bs0TWX07u3OuC8rKflyWWz4khgngh75VRfQ0wUt2%2B%2BuLiatKqGX%2FSi7MTtpAc2BsSI9k5OUQogdaY1ScKFOh5pK2IeOur1X35xUAnuxpvTB%2F1VdqFqNzU3dizmWOAJDaFsjJey9hBYHXTU2aaIDdxVJ8hLme0sQ%2B2qcVHnlimzVJ96bh2S6FDgfOBrAg%2F3VqhF6ZoHoEasq%2BauqOIwcQJUp6q4at2NqCZejpy1RgVflXWL7caIbpwNSp3E34PLiyEjwpX7K2wwXpD6bMt%2FOytqswl8LbyQY6pgG6nhNrzSaOWZtrmZSskfm7gwDWivWWlTxzezM5jEWMU4kyTMJkjyD6AVQKJRnhvm%2BHFEssvaG9b50%2BhDDN7vx2q6JqADAS9x5hAr61xpvI5UyVyB8dESwjIdRQneZTvG%2FN8w6CsKRm%2B55xK4W%2Bg1N0phUC2DftqWs8CK4sv2ma2DIZqC4aAzy4evlvZwKoN91pxsfPEhUbGjVFVhBYSyFn08bSFKc6&X-Amz-Signature=def1c2fd4833621df59d68f1d2f5b0720f21ab0c654f46917ff0c00aaf7a5c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHZ45VG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5sNS45Ajt2B7PnA4UW8fn3gcffSPhTd8ZMCXWryNbaAiAnRvYX48rM026xWZRkJBquXe5EAjcuXxCP%2F6yPoM9OiSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMffnJW6mUZK%2ByJwjoKtwDehFekx78Iy9thVPEZTX93OXeOnHP9QLuCkJ31j7SGKCbaxpTzkvKzxY1TMDMybJTj%2Fckg4bgeTRuaNa7n7YdyVgVfespFx%2BIoL8E3mzgKDhQcVRyuvaNvE%2B1kjG6xP46R%2Bgem2c%2B%2B5WJwPBEiJmlCDuvR7agPSu%2ByPr%2FQCQELF4VVFoJj82aJgV%2FIhGjKXgrXHgn7ng2lmmnjHGLKrZZ6Uwhd02kGQrC48JgYqhyz9A5aFtC9R1zC4qIRN7IIcn8flqRU13BaeLHht7iJd7UnIMFUpdlluIQqUIWPHdi4UP3Tk02RTXFsjoy7tifld0jTjU7NwSNqnqVhw3izP5iM2ZQyABNpLkcrPA2%2Bs0TWX07u3OuC8rKflyWWz4khgngh75VRfQ0wUt2%2B%2BuLiatKqGX%2FSi7MTtpAc2BsSI9k5OUQogdaY1ScKFOh5pK2IeOur1X35xUAnuxpvTB%2F1VdqFqNzU3dizmWOAJDaFsjJey9hBYHXTU2aaIDdxVJ8hLme0sQ%2B2qcVHnlimzVJ96bh2S6FDgfOBrAg%2F3VqhF6ZoHoEasq%2BauqOIwcQJUp6q4at2NqCZejpy1RgVflXWL7caIbpwNSp3E34PLiyEjwpX7K2wwXpD6bMt%2FOytqswl8LbyQY6pgG6nhNrzSaOWZtrmZSskfm7gwDWivWWlTxzezM5jEWMU4kyTMJkjyD6AVQKJRnhvm%2BHFEssvaG9b50%2BhDDN7vx2q6JqADAS9x5hAr61xpvI5UyVyB8dESwjIdRQneZTvG%2FN8w6CsKRm%2B55xK4W%2Bg1N0phUC2DftqWs8CK4sv2ma2DIZqC4aAzy4evlvZwKoN91pxsfPEhUbGjVFVhBYSyFn08bSFKc6&X-Amz-Signature=688449190c9e2af31444794d9baae2d57c4c1eb5e3508fd77cbbf641531b5a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

