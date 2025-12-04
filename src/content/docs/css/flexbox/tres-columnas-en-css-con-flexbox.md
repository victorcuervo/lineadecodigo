---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JN2EAHG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAcOLdbijpFLGflUTqg3HtH48VGjX2DUdkXEa0UsCFD4AiAhyLsr6bOtg9gdU12gOwSYRHPbGLbYiFbLykn%2BS%2B3poSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0eH51qVOKAlWmweoKtwDcwCtBNzAnD1beJAmC0cR%2Bi1MZ3DjTERLMRwc0CmztsZ7chp5d23R8Ata3X%2BOL2HTKUdmFbDdNKGgV7ybWBhMEwI1P%2B%2BXvPtPTKEINct9P7iZo6Pl%2BrTUpCMrSISSJxmAlN45tVDH0CO%2FVMf9efxLDkeFR4myriEO8vS41Fkdwm9FBdSV9KH0reXt2iRWhN5pvyURzBV5JKOeLEVc02dsCq4sGPKQ%2By3Ut%2BBrK5aJR99BDZqFJbRtMNY9dXwl5smnp6Mx0Pg8mlnelnFsTH8DK3vsn6Ya9zntpS1RW1G7WpTsBMAYvmG1jerlnjk9sxywWGFESxu%2Frisxi1eIn1GIICzsxdXRbnUmB8FTt2%2BDa%2B3Lho3yre%2Ba3QwsWCoK067Kj4aQQzZtYwJZxuMkzF%2FwOVMUFOvGucszeF2uLBycKKiP5114Lt2ukYACzJJ3up2nIc39EE5oqy6kELJN6%2BqabhfPl1Ri0a95PNHf9oF4rp6rBa3G6kPJLfWx44q342x%2FlclvuWe%2FBwvhuiVOqvo%2FX3D9MEv%2FhQ2f0ti%2Bi62dKJ4GQL3YO5anTHu8EaYYsgmuS81qgPuHwOFU78kWS2mIVJ3DMNYFm24zf8vo7BXuqIKW0sfO62EWYcXR3VQw5PLDyQY6pgFaDnVqAojkGoYxfLVDcXAYo0DwdfKlCDe7S%2BxswCK3Amcre7ih2WXeTClsgrpAVY08UL92wwyN3PwBafVFrZdSAlYTtnDW1ZeQ0Gdmgwi5660t6abiPba7aLqd9yt0AqSdwnbdLkmy6ODdSZJmxeeWNs5moHpqk6%2FIF8wgJUZX9dGr31mDvoYqtL0g%2BTVnIEYSmhFeO4uBicRX8u0jlMHp9mL%2FugSd&X-Amz-Signature=9d65f2af71dab6b669c3cb9ff8641302ebdfa567a007a98e25794dd5899bc473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JN2EAHG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAcOLdbijpFLGflUTqg3HtH48VGjX2DUdkXEa0UsCFD4AiAhyLsr6bOtg9gdU12gOwSYRHPbGLbYiFbLykn%2BS%2B3poSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0eH51qVOKAlWmweoKtwDcwCtBNzAnD1beJAmC0cR%2Bi1MZ3DjTERLMRwc0CmztsZ7chp5d23R8Ata3X%2BOL2HTKUdmFbDdNKGgV7ybWBhMEwI1P%2B%2BXvPtPTKEINct9P7iZo6Pl%2BrTUpCMrSISSJxmAlN45tVDH0CO%2FVMf9efxLDkeFR4myriEO8vS41Fkdwm9FBdSV9KH0reXt2iRWhN5pvyURzBV5JKOeLEVc02dsCq4sGPKQ%2By3Ut%2BBrK5aJR99BDZqFJbRtMNY9dXwl5smnp6Mx0Pg8mlnelnFsTH8DK3vsn6Ya9zntpS1RW1G7WpTsBMAYvmG1jerlnjk9sxywWGFESxu%2Frisxi1eIn1GIICzsxdXRbnUmB8FTt2%2BDa%2B3Lho3yre%2Ba3QwsWCoK067Kj4aQQzZtYwJZxuMkzF%2FwOVMUFOvGucszeF2uLBycKKiP5114Lt2ukYACzJJ3up2nIc39EE5oqy6kELJN6%2BqabhfPl1Ri0a95PNHf9oF4rp6rBa3G6kPJLfWx44q342x%2FlclvuWe%2FBwvhuiVOqvo%2FX3D9MEv%2FhQ2f0ti%2Bi62dKJ4GQL3YO5anTHu8EaYYsgmuS81qgPuHwOFU78kWS2mIVJ3DMNYFm24zf8vo7BXuqIKW0sfO62EWYcXR3VQw5PLDyQY6pgFaDnVqAojkGoYxfLVDcXAYo0DwdfKlCDe7S%2BxswCK3Amcre7ih2WXeTClsgrpAVY08UL92wwyN3PwBafVFrZdSAlYTtnDW1ZeQ0Gdmgwi5660t6abiPba7aLqd9yt0AqSdwnbdLkmy6ODdSZJmxeeWNs5moHpqk6%2FIF8wgJUZX9dGr31mDvoYqtL0g%2BTVnIEYSmhFeO4uBicRX8u0jlMHp9mL%2FugSd&X-Amz-Signature=bf1e9d18f95f1b4d8e4542b7c33296883380dcba2f6a693b995987cc1502f81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

