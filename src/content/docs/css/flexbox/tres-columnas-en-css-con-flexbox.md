---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVC3AWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR77M8CH7LpvwVktx2aaZvfjG3pmzXbUUgIcHFmx58sAiBQSMGtXcCmvJ7rFH%2Bwmk8L3jOC%2FR0F4fMfrtwIXCWgQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYKMQOhUQUP3FuRoOKtwDHNNbij%2B70DWL5VjWOQbRP576NDKjk3dS0J%2B8mSl7DDZtnldFhARq74istIPxvOUjf0wrTpxSBic9eb%2FgPLekcTMFbnFJcJi0OvUCRQRogDXoLOFIWfQW7uX%2FQ5eHRksM3hnpIyr6A2ZKsCu%2F5%2BGmZeLiZp%2BpuUtrw40Pwr5PsGranLx4aSg8FF2VBsg8%2FuTUNQp913cjMBUl50yKsfREo%2FnRBUeapK27OroUmq86duNugfdG1h3ANuLoYRtWytapSKFRXgsfvonaeLyjjYJtPHsBMw1k8VzQp5C%2B%2BB3KplkFyzUKJA9rxJlaC0gd5nlbn8TMxfXnDirGdZ4%2FKjf%2BJ2nJjnm2k1M4z74nC0DEA8lqOY3KE%2FAZVhEStO78aLQC6dXmlcH1s0pe8BHgLeHFmSRs%2BquyXocq69F6OiChZUozw%2BNAA5XLrNRET%2Ft3yqNU1ke1FjjyDUYIJQKKXZVTasy4MHCs6%2Fl51%2BDm5f07u%2FXaLr%2BZ%2BOwADSzhzvPYr0gXafpFIDm27nTLrsNyPI6Q7lVEezVneAGj0LKD42vvyPbkjzcjiMUsB3EtohOkB0t3XLtIpTudu6TV7ZUs1TP1LljVnEO0r251avx3Ub%2FBjuD2D7CVSYMqe4fkzBgw1rzPyQY6pgG7ObLuW7DLeDCTygWEVNO1crZANr78OPsIOo3z2v7KBgMGVQIgbx0noGnbt2j%2BHjRhq5LOjLfy5wI79eg4LUWSuq2rOzHFb79bhcHutgEclt%2B0jS8gn2EDNR%2Bmf7zMVJ2Pxz%2FauzqzhoCjCsteAEF9I%2F0FtP66%2BCbdMNJ9PlnQkR9jzyVk2DSVrxpbNm%2FpJ4U%2Bs1IJMuM0peSk4%2BuOFAtVvNRrK74C&X-Amz-Signature=5094e887b882e0ff5c4f85de5dfd4d5f1e5016471c6fe11f7c5c8ede23bb3e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVC3AWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR77M8CH7LpvwVktx2aaZvfjG3pmzXbUUgIcHFmx58sAiBQSMGtXcCmvJ7rFH%2Bwmk8L3jOC%2FR0F4fMfrtwIXCWgQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYKMQOhUQUP3FuRoOKtwDHNNbij%2B70DWL5VjWOQbRP576NDKjk3dS0J%2B8mSl7DDZtnldFhARq74istIPxvOUjf0wrTpxSBic9eb%2FgPLekcTMFbnFJcJi0OvUCRQRogDXoLOFIWfQW7uX%2FQ5eHRksM3hnpIyr6A2ZKsCu%2F5%2BGmZeLiZp%2BpuUtrw40Pwr5PsGranLx4aSg8FF2VBsg8%2FuTUNQp913cjMBUl50yKsfREo%2FnRBUeapK27OroUmq86duNugfdG1h3ANuLoYRtWytapSKFRXgsfvonaeLyjjYJtPHsBMw1k8VzQp5C%2B%2BB3KplkFyzUKJA9rxJlaC0gd5nlbn8TMxfXnDirGdZ4%2FKjf%2BJ2nJjnm2k1M4z74nC0DEA8lqOY3KE%2FAZVhEStO78aLQC6dXmlcH1s0pe8BHgLeHFmSRs%2BquyXocq69F6OiChZUozw%2BNAA5XLrNRET%2Ft3yqNU1ke1FjjyDUYIJQKKXZVTasy4MHCs6%2Fl51%2BDm5f07u%2FXaLr%2BZ%2BOwADSzhzvPYr0gXafpFIDm27nTLrsNyPI6Q7lVEezVneAGj0LKD42vvyPbkjzcjiMUsB3EtohOkB0t3XLtIpTudu6TV7ZUs1TP1LljVnEO0r251avx3Ub%2FBjuD2D7CVSYMqe4fkzBgw1rzPyQY6pgG7ObLuW7DLeDCTygWEVNO1crZANr78OPsIOo3z2v7KBgMGVQIgbx0noGnbt2j%2BHjRhq5LOjLfy5wI79eg4LUWSuq2rOzHFb79bhcHutgEclt%2B0jS8gn2EDNR%2Bmf7zMVJ2Pxz%2FauzqzhoCjCsteAEF9I%2F0FtP66%2BCbdMNJ9PlnQkR9jzyVk2DSVrxpbNm%2FpJ4U%2Bs1IJMuM0peSk4%2BuOFAtVvNRrK74C&X-Amz-Signature=4b2aef508d171ffcdb42585a7b394c65cffe2097bfd7b360934ee7907d369e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

