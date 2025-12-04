---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QM4BQF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKSsAkytPx0t8sBj%2Frfl0OJLJZ%2B40uMc8DIR0gwY22QAiATblvjMk3dO7wlTVZvbIyoXJ8Yk%2F%2Bz73xOb7Dp2xCHkir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMX9Ya%2Bfa9nd1ta2HiKtwDf3b8%2BicPubk59YRqb03G4DrmRFJddgZPA6%2BkRYvxkmLwqCY%2BwluNLK8%2FJWdSGCArBfp4kqKx9wNnXN6P2Kr9Zrf74VtK%2B4esd%2F4d4dsWJEU95yHh5m4lvhhf92iKMya1nO%2BKsq8KfTznnrNlCQ0lO4OpzJ0YV0jSIzILAzYNh3jZ7bCzctmIhRD1WusY%2BrJ9iYG7Pq7LgHhr6s9ei%2Bqp9A9nUBogcYA7sCWitOPHvSr3guSISlOHn6Fi2Ah6NxlEA4ovrHnBZA7ic7ALUbu6nTwqYKBya%2FYJgqKgMgARuabBUwKimPq4j0%2FgaIvLzSnrNN2vbZ04AZTZgaVk5uCTMzNuCkGsFPUs3TiOW30LWZsbNrLwFLqrZ8HHzCo3DscP9anWlWYyxQ8Gu%2BpLtrx571mbcNDnIWtt77T7dvrLye4m7LM5G7cVgWIg%2BNs%2BPwdCv1FL4eqI5tMigrXpFJtZ5%2FORlKuEKgo6nxlgnHoba6DiR0677SL7D1pV2%2FTclRrTZSuI4%2B3CqGM59C8fRW%2Bdt4Fl0FaqIL3%2B4VQcCX8iX4Tgy3FLvdR%2BPG3%2F4tm%2B%2BiYOG1jWr8kO4LBrE9NvQpx7voargqYSGyxGIUspt1tXB44z8Z5Gl%2FtC7mM2q18w34zIyQY6pgHWTy1sgrr58YV%2BOJDI0B3sVm81NB1qaH4qQcurO0WNYzMf2Q%2FPfBrxfCEzBYyuiPy%2FJjq18d5XdOKzABYgbLwoA9LKTAu5KLge5qezoqQPiUgVjC%2BwMFM3KW%2F61faAC95hzGITiS%2FGs4ECRk05w%2FGWOkoAO0gxHxMwfKRqOnQTfhXdlBEthnPlYnmwM5L1650I9%2BORTXr7WUS%2FTPr40XNZI4eqlV4G&X-Amz-Signature=507830eebdff615e7063c4f12e9a726a47de6d8224d211c3ad119a54954d8b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QM4BQF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKSsAkytPx0t8sBj%2Frfl0OJLJZ%2B40uMc8DIR0gwY22QAiATblvjMk3dO7wlTVZvbIyoXJ8Yk%2F%2Bz73xOb7Dp2xCHkir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMX9Ya%2Bfa9nd1ta2HiKtwDf3b8%2BicPubk59YRqb03G4DrmRFJddgZPA6%2BkRYvxkmLwqCY%2BwluNLK8%2FJWdSGCArBfp4kqKx9wNnXN6P2Kr9Zrf74VtK%2B4esd%2F4d4dsWJEU95yHh5m4lvhhf92iKMya1nO%2BKsq8KfTznnrNlCQ0lO4OpzJ0YV0jSIzILAzYNh3jZ7bCzctmIhRD1WusY%2BrJ9iYG7Pq7LgHhr6s9ei%2Bqp9A9nUBogcYA7sCWitOPHvSr3guSISlOHn6Fi2Ah6NxlEA4ovrHnBZA7ic7ALUbu6nTwqYKBya%2FYJgqKgMgARuabBUwKimPq4j0%2FgaIvLzSnrNN2vbZ04AZTZgaVk5uCTMzNuCkGsFPUs3TiOW30LWZsbNrLwFLqrZ8HHzCo3DscP9anWlWYyxQ8Gu%2BpLtrx571mbcNDnIWtt77T7dvrLye4m7LM5G7cVgWIg%2BNs%2BPwdCv1FL4eqI5tMigrXpFJtZ5%2FORlKuEKgo6nxlgnHoba6DiR0677SL7D1pV2%2FTclRrTZSuI4%2B3CqGM59C8fRW%2Bdt4Fl0FaqIL3%2B4VQcCX8iX4Tgy3FLvdR%2BPG3%2F4tm%2B%2BiYOG1jWr8kO4LBrE9NvQpx7voargqYSGyxGIUspt1tXB44z8Z5Gl%2FtC7mM2q18w34zIyQY6pgHWTy1sgrr58YV%2BOJDI0B3sVm81NB1qaH4qQcurO0WNYzMf2Q%2FPfBrxfCEzBYyuiPy%2FJjq18d5XdOKzABYgbLwoA9LKTAu5KLge5qezoqQPiUgVjC%2BwMFM3KW%2F61faAC95hzGITiS%2FGs4ECRk05w%2FGWOkoAO0gxHxMwfKRqOnQTfhXdlBEthnPlYnmwM5L1650I9%2BORTXr7WUS%2FTPr40XNZI4eqlV4G&X-Amz-Signature=ec04c75858c48320db3ea60d1736b00386931693056501d0ecf4e5017e937156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

