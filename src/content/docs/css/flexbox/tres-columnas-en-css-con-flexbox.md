---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHX4GPB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfFAhkTuW9zNxkgj7P95ecUEOFsk8qj06dMvn2%2FHz7kAiBHSbCEGNlKzzLvIOUEHowRcKPtQuvhu9C8jJr3LDZ4wSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMCFwHzruzQT1OlsDyKtwDmMgreVovKs9Z8Hg29Rc7vJ7Zi68l%2F7TWRGG367WfAXPK8g6jjpoAmrNoPmsUMQ2ln5nHxJuzrGKDUt4DOA9dv5975oHZRZrMTuyVqM3NhbKcuWF130tDNXT9wYSrzSd2ZGMdvA4MZz1I8HcQOEUb1uX9zDZ0Yk%2BPdDW75UhbTbbZ2YattUOL7ZMMSgfl7MMkilBtMmzzg%2Bbp7m4MTcYR8odKRSVkAufk79bVvQJrWRW7G8Eyja0o%2FiNU28vf8LBL3ml4thdhVuMr4ZhJjdcB44hDCGR%2BUmtTSUiVwSD7i4ElXCDyNkEgFmWTl87YQrmnqzhH7MKZPHvAjd5JdmVmRuOQfBYdBSeykH1SH8YRdSy3aTL3rAijgGv2PRzHoLeFb%2Bm2jJWvBxnQqqRtKb1QpSVUFH%2FsQooTppB1TeMadkvZXLjDn4%2FvPiUlrCIwPTveZYstb1SThlCx362YpcnqzCPTb2jIi7tl9ic8S0yh%2FOAEeWCAJeYfFChmwPuu4PhTASw3%2FYFiFepyu95m0LheOuRV2lj9bCJ7YvJDJ36oY0MBdYAEtM2091iQOmH373wqoYcg%2FB%2BnfaThBKmqSv9igqsj0roBcqik%2BmDg6a3tssMXjfA%2FnUNjWkbMh3Iwou%2FLyQY6pgHHbZ1JhejBewksYNbUvqdFvCdlkl4lLNFvr0JbcPinmFGd4H%2Fo%2Fh2pMqIRjo%2FH%2FQuE6QObFDUGgcVKpWyYRjDPmRqKo4YjSyvODG1xXbS3S4hnPDFlxKWQI2AJmDRIpS%2F7edegECO%2FGO9cpAcXn38iTKe3qhkOkL%2F6wE1Dvntef0os1Ri9FMv%2F82FlvNOLli7IOia0uUEsAdnwgXN8QCFTsjhSl4EY&X-Amz-Signature=b04f582098f4f5490dc75a1506be8f259f7fe8a0c51e8f8fc7eb05642f3fb405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHX4GPB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfFAhkTuW9zNxkgj7P95ecUEOFsk8qj06dMvn2%2FHz7kAiBHSbCEGNlKzzLvIOUEHowRcKPtQuvhu9C8jJr3LDZ4wSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMCFwHzruzQT1OlsDyKtwDmMgreVovKs9Z8Hg29Rc7vJ7Zi68l%2F7TWRGG367WfAXPK8g6jjpoAmrNoPmsUMQ2ln5nHxJuzrGKDUt4DOA9dv5975oHZRZrMTuyVqM3NhbKcuWF130tDNXT9wYSrzSd2ZGMdvA4MZz1I8HcQOEUb1uX9zDZ0Yk%2BPdDW75UhbTbbZ2YattUOL7ZMMSgfl7MMkilBtMmzzg%2Bbp7m4MTcYR8odKRSVkAufk79bVvQJrWRW7G8Eyja0o%2FiNU28vf8LBL3ml4thdhVuMr4ZhJjdcB44hDCGR%2BUmtTSUiVwSD7i4ElXCDyNkEgFmWTl87YQrmnqzhH7MKZPHvAjd5JdmVmRuOQfBYdBSeykH1SH8YRdSy3aTL3rAijgGv2PRzHoLeFb%2Bm2jJWvBxnQqqRtKb1QpSVUFH%2FsQooTppB1TeMadkvZXLjDn4%2FvPiUlrCIwPTveZYstb1SThlCx362YpcnqzCPTb2jIi7tl9ic8S0yh%2FOAEeWCAJeYfFChmwPuu4PhTASw3%2FYFiFepyu95m0LheOuRV2lj9bCJ7YvJDJ36oY0MBdYAEtM2091iQOmH373wqoYcg%2FB%2BnfaThBKmqSv9igqsj0roBcqik%2BmDg6a3tssMXjfA%2FnUNjWkbMh3Iwou%2FLyQY6pgHHbZ1JhejBewksYNbUvqdFvCdlkl4lLNFvr0JbcPinmFGd4H%2Fo%2Fh2pMqIRjo%2FH%2FQuE6QObFDUGgcVKpWyYRjDPmRqKo4YjSyvODG1xXbS3S4hnPDFlxKWQI2AJmDRIpS%2F7edegECO%2FGO9cpAcXn38iTKe3qhkOkL%2F6wE1Dvntef0os1Ri9FMv%2F82FlvNOLli7IOia0uUEsAdnwgXN8QCFTsjhSl4EY&X-Amz-Signature=8e3ecd3cd5b4a212a85a9d99a4b94542c86172f2b13c75dcbd31f3a0acda6b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

