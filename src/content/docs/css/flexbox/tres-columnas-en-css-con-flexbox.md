---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6DWWUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH2QvUnu4%2FeCJqMlhqcJYJBny3GXLvTLvqRUpZl7kuiAIhAJxqAnKZhZ5ujQrZlOjJw68HtS49nJ47kiorKl6ucSIsKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl5SDC570%2Bq0lDaFIq3ANLsNMdr6ncQepeIZea3goJsW5d7uesdNhrVsg2nokbL1040%2FyMGyvyb%2BwdyPFnSxCljAc1aYe%2Bq793i2O64hcUKa6V2TSbrUkTeE6kBGXoIpQpGNSwsYdAk3nCkCh99wIvoGb1%2BO0QwVFzak2SRexhOPsRsdcwh0rc3ktd%2Be0kSo1oLqPVJ7iTzaIkgllgg2pJ6FPdfTffe3VixKokEnWL0wvhENz22knnN2DzitldJSoZ6p6WBT2qVlbXGRQqCekehKBpkdmU2YhjyiUN3NTDOiymi35nlfo3Tk0ZIVu8jr7o%2B34XDg5F5NA2jLXIyKs1T9Hp1KNkkPfd22Xe47cIkE5xYEqdNmydhcuvj4Prd2CC%2F4E6dcSeeqvhy5BE4jSK8WozdKDeGnY%2Fcjh7lrF3eIugZ8fDo2WDv0kUF%2BmNN9gbS%2FBrQ3fIpwZ3DBlf8gTWml3BiXceco01NXpqKfuCBGjXj4BV3D6FlNpzRUtvDGIEZDFFHbI%2FtBrsJL150wcDIoHZCGNQfi5VqbjYyzVptYEojYkyHiblX1iit1mF5VfUpD9nWnVcEeVLUOWMv8uXf3tOrBdka5d%2F4OtwE3wUg7Tws5ooYNOcjTWtDxtJCMB1olfwGdto9zclLjDyxtfJBjqkAaMb1MZjI7wHE0%2BfAYNLScmpjslrdlX5Oqhvp5zKhkaybwLdpUeLSMK9ycSyay6tpXQrZROt3n9jpIH1CWfiwfx2VJJKXP59WEmR5kV3ufZUhWgHQb2FDtGzxPem23mb86906nx2E5PUXpkmmi7nHKPjlWQodWDQgPw04IJoVll01LXltqvspRCJEznV7JPyEqcKBueAKr3kjwNQnNmL4VGqVEri&X-Amz-Signature=f383b4c65c5150e31fd2e06177c59020ff3b4a0811f7cf0827cf45fb8ad6902a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6DWWUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH2QvUnu4%2FeCJqMlhqcJYJBny3GXLvTLvqRUpZl7kuiAIhAJxqAnKZhZ5ujQrZlOjJw68HtS49nJ47kiorKl6ucSIsKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl5SDC570%2Bq0lDaFIq3ANLsNMdr6ncQepeIZea3goJsW5d7uesdNhrVsg2nokbL1040%2FyMGyvyb%2BwdyPFnSxCljAc1aYe%2Bq793i2O64hcUKa6V2TSbrUkTeE6kBGXoIpQpGNSwsYdAk3nCkCh99wIvoGb1%2BO0QwVFzak2SRexhOPsRsdcwh0rc3ktd%2Be0kSo1oLqPVJ7iTzaIkgllgg2pJ6FPdfTffe3VixKokEnWL0wvhENz22knnN2DzitldJSoZ6p6WBT2qVlbXGRQqCekehKBpkdmU2YhjyiUN3NTDOiymi35nlfo3Tk0ZIVu8jr7o%2B34XDg5F5NA2jLXIyKs1T9Hp1KNkkPfd22Xe47cIkE5xYEqdNmydhcuvj4Prd2CC%2F4E6dcSeeqvhy5BE4jSK8WozdKDeGnY%2Fcjh7lrF3eIugZ8fDo2WDv0kUF%2BmNN9gbS%2FBrQ3fIpwZ3DBlf8gTWml3BiXceco01NXpqKfuCBGjXj4BV3D6FlNpzRUtvDGIEZDFFHbI%2FtBrsJL150wcDIoHZCGNQfi5VqbjYyzVptYEojYkyHiblX1iit1mF5VfUpD9nWnVcEeVLUOWMv8uXf3tOrBdka5d%2F4OtwE3wUg7Tws5ooYNOcjTWtDxtJCMB1olfwGdto9zclLjDyxtfJBjqkAaMb1MZjI7wHE0%2BfAYNLScmpjslrdlX5Oqhvp5zKhkaybwLdpUeLSMK9ycSyay6tpXQrZROt3n9jpIH1CWfiwfx2VJJKXP59WEmR5kV3ufZUhWgHQb2FDtGzxPem23mb86906nx2E5PUXpkmmi7nHKPjlWQodWDQgPw04IJoVll01LXltqvspRCJEznV7JPyEqcKBueAKr3kjwNQnNmL4VGqVEri&X-Amz-Signature=6e4553e6554e49b2db01bac1ffcf364d0e0c66d8ad38a4d84edec582be561b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

