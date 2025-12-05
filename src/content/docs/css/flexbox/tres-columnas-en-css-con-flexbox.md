---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBERLKT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvmRlVnKk9aMUorMpJHuYJc2j8rErOf8JhfvYFjuoLbAiB7asUezJeaAq7BaB9nN5lomU2w1mT38LEj%2Fuk91MlmnCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMg9xo328azCuhbnt5KtwD6Jg24s%2B48V7X7W0gqs1RYQWNUvT0rZPgIKg62McqKCyijgqWR4HIwgLAYjuTYOvpUSFhcO1CKv4u5jTOII3kNHNMLuYZx%2BAFeLyUeDsX03NF3dm0%2BLqAo%2BOutscJpHZDW6XBTteAI0KMkUrVpm3lXFWy1PpCjZbTOpwWb2HiMs7UO4RLDwvzFhtNzQecHnnPiavcf%2FxgfBvWbb2Pjg1oRQDNjLkHjKsHyZH2ZEDsuY%2BtW6DHBDfLxYmNe0VkhGKGC5EyxQmf0MBt%2BMojff21%2B2oooBGmjC3aN4eUm%2BO8xToyyAMdbrfDja9NOzLeA2xeuijB8kSPHpkFyeRdLv1KXLVforMk4rk3a4dZva8h119a9fzB9mbOyJyctdWPY36B8iiNGFRgqx9rd4hZk61%2BP0GHwHcRFLBUhwb3uAc0FRx%2BegOmMWcdtlnNgCghR0Wgljla8LSKP2iE%2F3t1R6EOGym9wpRyHZI3kAT%2BQnhzffZb8ygdx8H0K%2BMlkKz%2FJXUVvua9eDoyirMr%2F2bjc%2BwFjo1VkDRsLokZQZO3FMkqaoKqKsOpkRWomB3Y3QIzTxtdin25VDhMnxkYz%2Fgmhm68x449jJWDKg1S1wUYo4wMLLaNmVNJ1YdtTFfKrlEwsu3LyQY6pgHC4KfrZboLhAu0l0E2kPPClkwwReTHeBYCGRgN0c4AtpIeD0FbYzG4LgXu%2Fk1VBZ5Cm8Cxbha4DWm29VC1632oyhmbawfEhx8egWNp2hm%2BZVR0fHP%2FZoL9BikMH5OHbKHB0EXg2jsPBUiUqaLlw2P5bF0WzCuBH6bS3em9fHu3SH%2BMjlbexCIE%2Fry983gkQwS%2FYhcIZD3yy%2BbCiSSBrOMkPkPmnAtm&X-Amz-Signature=1268e07d28543185c06f1898dca598444c00df71c419abefc1e2e33309370876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBERLKT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvmRlVnKk9aMUorMpJHuYJc2j8rErOf8JhfvYFjuoLbAiB7asUezJeaAq7BaB9nN5lomU2w1mT38LEj%2Fuk91MlmnCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMg9xo328azCuhbnt5KtwD6Jg24s%2B48V7X7W0gqs1RYQWNUvT0rZPgIKg62McqKCyijgqWR4HIwgLAYjuTYOvpUSFhcO1CKv4u5jTOII3kNHNMLuYZx%2BAFeLyUeDsX03NF3dm0%2BLqAo%2BOutscJpHZDW6XBTteAI0KMkUrVpm3lXFWy1PpCjZbTOpwWb2HiMs7UO4RLDwvzFhtNzQecHnnPiavcf%2FxgfBvWbb2Pjg1oRQDNjLkHjKsHyZH2ZEDsuY%2BtW6DHBDfLxYmNe0VkhGKGC5EyxQmf0MBt%2BMojff21%2B2oooBGmjC3aN4eUm%2BO8xToyyAMdbrfDja9NOzLeA2xeuijB8kSPHpkFyeRdLv1KXLVforMk4rk3a4dZva8h119a9fzB9mbOyJyctdWPY36B8iiNGFRgqx9rd4hZk61%2BP0GHwHcRFLBUhwb3uAc0FRx%2BegOmMWcdtlnNgCghR0Wgljla8LSKP2iE%2F3t1R6EOGym9wpRyHZI3kAT%2BQnhzffZb8ygdx8H0K%2BMlkKz%2FJXUVvua9eDoyirMr%2F2bjc%2BwFjo1VkDRsLokZQZO3FMkqaoKqKsOpkRWomB3Y3QIzTxtdin25VDhMnxkYz%2Fgmhm68x449jJWDKg1S1wUYo4wMLLaNmVNJ1YdtTFfKrlEwsu3LyQY6pgHC4KfrZboLhAu0l0E2kPPClkwwReTHeBYCGRgN0c4AtpIeD0FbYzG4LgXu%2Fk1VBZ5Cm8Cxbha4DWm29VC1632oyhmbawfEhx8egWNp2hm%2BZVR0fHP%2FZoL9BikMH5OHbKHB0EXg2jsPBUiUqaLlw2P5bF0WzCuBH6bS3em9fHu3SH%2BMjlbexCIE%2Fry983gkQwS%2FYhcIZD3yy%2BbCiSSBrOMkPkPmnAtm&X-Amz-Signature=853b133ebd54d218a4fea25f3855905b8f00d76fd5ced326df244bbeaa34b8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

