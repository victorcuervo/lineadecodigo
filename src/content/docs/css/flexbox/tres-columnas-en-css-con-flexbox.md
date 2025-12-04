---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAMMYWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAOKHwotbkzdyFCR36TS2%2BzMRjZMsGLed%2B%2BeQOS6JXvYAiB1ZMxNCfNLczFk3%2BR6XnRaZG6xIqOWjdM1fMGU59DlPyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMrIxa4RniARMSqoIDKtwDGOzQOLcqLNXTVhuG19dh5b5dNK8qmJgbLENm4NN%2BFCrmqbtXbl%2FW8QxsjRIbPLjb4DUfXHYhKTvBtSXGlq50fdUHXADm2KNrAKs%2B0bhqzVGMW0Lz8Y4IxMnWAn8UN2TyDNgRnPWShzjmvUAGdCyiRipdlYBASnf%2Bu8WzYOVZtjAJAXVyGHSSxm5bcqZVgcdXZr88JGOVY5wUA4%2FX%2BKLyN6CdxWywOGao1Qv445Jom%2FH5kgNFdU31Oktg65K8Nyjj3GAPkbgnCtk4dzLogHDQTbZyr%2FlAMGzCLgjVrnEfzTGdtZO5jobomTILypQoi4QeZ4%2FxoV4OIq1ZBgg0VpIBLWUB3RVRzynQEICAIBlPF1e5L6pB6xcibueWurTdkp3lICuYrcS7neUmttZrF5ZQOuUYdGYEry1YG4h5dMggqL6p3%2Fpy7R0Wb2THtW%2ByxrPwlC1TlEmMKr9KBlxef19YyqCpMeFvDTuwwEr%2BkgRjwgGiQlDbljelr%2Fq7uQII3V6nq2rkVBi3Ff%2FEkYAjB4zyxpzpwdwJwbub3rCBbLsGx1qno8STNMSoyp%2BbbPidEI0lHFao7ygyZbaavlf7UfeEz0Z9ajw%2BGtkhNgS5U9nrjyBcQ1WSI6Cfa3rfIA8w4oPGyQY6pgF1xUwsg919YFolrBrduZS9zTyhvACc0K1vb%2FA9l7S99DU1ClpgBKPbIFMGvgGvPlPkMZCHQ8eOzl35eH9XZ0D8suuYNzrYZRDpZa8xfLiBX1T7OBUPz5mk4yd5SA43av8wfuymuLQu%2FDzHJtcUNAAzhYLj3ME7SI6Y%2BK9hMIzM8Z8tQhKEZwxqrx%2FrCSUuTbmm1IdFBfJHfWUeIJBS57W7BNR65BDg&X-Amz-Signature=cd285bc53056ab86c172e9e27e965acb19d692f55377055d06f5e948509984d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAMMYWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAOKHwotbkzdyFCR36TS2%2BzMRjZMsGLed%2B%2BeQOS6JXvYAiB1ZMxNCfNLczFk3%2BR6XnRaZG6xIqOWjdM1fMGU59DlPyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMrIxa4RniARMSqoIDKtwDGOzQOLcqLNXTVhuG19dh5b5dNK8qmJgbLENm4NN%2BFCrmqbtXbl%2FW8QxsjRIbPLjb4DUfXHYhKTvBtSXGlq50fdUHXADm2KNrAKs%2B0bhqzVGMW0Lz8Y4IxMnWAn8UN2TyDNgRnPWShzjmvUAGdCyiRipdlYBASnf%2Bu8WzYOVZtjAJAXVyGHSSxm5bcqZVgcdXZr88JGOVY5wUA4%2FX%2BKLyN6CdxWywOGao1Qv445Jom%2FH5kgNFdU31Oktg65K8Nyjj3GAPkbgnCtk4dzLogHDQTbZyr%2FlAMGzCLgjVrnEfzTGdtZO5jobomTILypQoi4QeZ4%2FxoV4OIq1ZBgg0VpIBLWUB3RVRzynQEICAIBlPF1e5L6pB6xcibueWurTdkp3lICuYrcS7neUmttZrF5ZQOuUYdGYEry1YG4h5dMggqL6p3%2Fpy7R0Wb2THtW%2ByxrPwlC1TlEmMKr9KBlxef19YyqCpMeFvDTuwwEr%2BkgRjwgGiQlDbljelr%2Fq7uQII3V6nq2rkVBi3Ff%2FEkYAjB4zyxpzpwdwJwbub3rCBbLsGx1qno8STNMSoyp%2BbbPidEI0lHFao7ygyZbaavlf7UfeEz0Z9ajw%2BGtkhNgS5U9nrjyBcQ1WSI6Cfa3rfIA8w4oPGyQY6pgF1xUwsg919YFolrBrduZS9zTyhvACc0K1vb%2FA9l7S99DU1ClpgBKPbIFMGvgGvPlPkMZCHQ8eOzl35eH9XZ0D8suuYNzrYZRDpZa8xfLiBX1T7OBUPz5mk4yd5SA43av8wfuymuLQu%2FDzHJtcUNAAzhYLj3ME7SI6Y%2BK9hMIzM8Z8tQhKEZwxqrx%2FrCSUuTbmm1IdFBfJHfWUeIJBS57W7BNR65BDg&X-Amz-Signature=f3f3b975e6c8bba914e4851bdbf023d58e1616875b5faa59a4435215313f06f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

