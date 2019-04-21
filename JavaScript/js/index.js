'use strict';

// Task 1

// window.onload = function()
// {
//     let dataType;
//     [...document.querySelectorAll('button')].forEach(btn =>
//         {
//             btn.onclick = function()
//             {   
//                 const select = document.querySelector('.select');
//                 if(select)
//                 {
//                     select.classList.remove('select');
//                 }
//                 this.classList.add('select');
//                 [...document.querySelectorAll('.select')].forEach(clickBtn =>
//                     {
//                         dataType =  this.getAttribute('data-type');
                        
//                     });

//                 let i = 7;
//                 let j = 0;
//                 const images = document.querySelectorAll('img');
//                 [...images].forEach(img =>
//                     {
//                         img.parentElement.classList.add('d-none');
                        
//                         if(img.classList.contains(`${dataType}`))
//                         {
//                             img.parentElement.classList.remove('d-none');
    
//                         }
//                         else if(`${dataType}` === 'all')
//                         {
//                             img.parentElement.classList.remove('d-none');
//                         }
//                         else if(`${dataType}` === 'asc')
//                         {
//                             img.parentElement.classList.remove(`order-${i--}`);
                            
//                             img.parentElement.classList.add(`order-${j++}`)
//                             img.parentElement.classList.remove('d-none');
//                         }
//                         else if(`${dataType}` === 'desc')
//                         {
//                             img.parentElement.classList.remove(`order-${j++}`);
                           
//                             img.parentElement.classList.add(`order-${i--}`)
//                             img.parentElement.classList.remove('d-none');
//                         }
                        
//                     });     
                    
//             } 
            
//         })
// }

// Task 2

window.onload = function()
{
    const input = document.querySelector('input');
    const icon = document.querySelector('.fa-cloud-upload-alt');
    const images = document.querySelector('.images');
    const videos = document.querySelector('.videos');
    const audios = document.querySelector('.audios');
    let totalFileSize = 0;
    let imagesCount = 0;
    let videosCount = 0;
    let audioCount = 0;
    
    icon.onclick = function()
    {
        this.nextElementSibling.click();
    }
    icon.ondragover = function(e)
    {
        e.preventDefault();
        icon.style.backgroundColor = 'rgb(200, 255, 255)';
    }
    icon.ondragleave = function()
    {
        icon.style.backgroundColor = 'white';
    }
    icon.ondrop = function(e)
    {
        e.preventDefault();
        fileUploader([...e.dataTransfer.files]);
        icon.style.backgroundColor = 'white';
    }
    input.onchange = function(e)
    {
        fileUploader([...e.target.files]);
    }
    function fileUploader(files)
            {
                files.forEach(file =>
                    {
                        totalFileSize += file.size;
                        if(file.type.match('image/*'))
                        {
                            imagesCount++;
                        }
                        else if(file.type.match('video/*'))
                        {
                            videosCount++;
                        }
                        else if(file.type.match('audio/*'))
                        {
                            audioCount++;
                        }
                        const reader = new FileReader();
                        reader.onloadend = function(event)
                        {
                            if(file.type.match('image/*'))
                            {
                                const img = document.createElement('img');
                                img.src = event.target.result;
                                images.appendChild(img);
                                images.classList.remove('d-none');
                            }
                            else if(file.type.match('video/*'))
                            {
                                videosCount++;
                                const video = document.createElement('video');
                                video.setAttribute('controls', '');
                                const source = document.createElement('source')
                                source.src = event.target.result;
                                video.appendChild(source)
                                videos.appendChild(video);
                                videos.classList.remove('d-none');
                            }
                            else if(file.type.match('audio/*'))
                            {
                                audioCount++;
                                const audio = document.createElement('audio');
                                audio.setAttribute('controls', '');
                                const source = document.createElement('source')
                                source.src = event.target.result;
                                audio.appendChild(source)
                                audios.appendChild(audio);
                                audios.classList.remove('d-none');
                            }
                        }
                        reader.readAsDataURL(file);
                    })
                    document.querySelector('.file-type-count').innerText =
                    `Images: ${imagesCount}
                     Videos: ${videosCount}
                      Audios: ${audioCount}`; 
                    totalFileSize = (totalFileSize / 1048576).toFixed(2);
                    document.querySelector('.total-file-size').innerText = 
                    `Total File Size : ${totalFileSize} mb`;
            }
}

// window.onload = function()
// {
//     const table = document.querySelector('.table');
//     let count = 0;
//     const uploadArea = document.querySelector('.upload-area');
//     document.querySelector('.upload').onclick = function()
//     {
//         this.nextElementSibling.click();
//     }
  
//     document.querySelector('#fileUpload').onchange = function(e)
//     {
//        imagesUploader([...e.target.files]);
//     }

//     uploadArea.ondragover = function(e)
//     {
//         e.preventDefault(); 
//         uploadArea.style.backgroundColor = '#f4f9ff';
//     } 
//     uploadArea.ondragleave = function(e)
//     {
//         uploadArea.style.backgroundColor = '#FAFBFC';
//     } 
    
//     uploadArea.ondrop = function(e)
//     {
//         e.preventDefault();
//         uploadArea.style.backgroundColor = '#FAFBFC';
        
//         imagesUploader([...e.dataTransfer.files]);
//     }

//     function imagesUploader(files)
//     {
//         table.classList.remove('d-none');
//         files.forEach(file => 
//         {
//             const reader = new FileReader();
//             reader.onloadend = function(event)
//             {
//                 count++;

//                 const tr = document.createElement('tr');

//                 const tdNo = document.createElement('td');
//                 tdNo.innerText = count;

//                 const tdImage = document.createElement('td');
//                 const img = document.createElement('img');
//                 img.classList.add('img-thumbnail');
//                 img.src = event.target.result;
//                 tdImage.appendChild(img);

//                 const tdName = document.createElement('td');
//                 tdName.innerText = file.name;

//                 const tdSize = document.createElement('td');
//                 tdSize.innerText = (file.size / 1024).toFixed(2) + ' Kb';

//                 const tdDelete = document.createElement('td');
//                 const icon = document.createElement('i');
//                 icon.className = 'far fa-trash-alt';
//                 tdDelete.appendChild(icon);

//                 icon.onclick = function()
//                 {
//                     let current = tr;
//                     while(current.nextElementSibling)
//                     {
//                         current.nextElementSibling.firstElementChild.innerText -= 1;
//                         current = current.nextElementSibling;
//                     }
//                     count--;
//                     tr.remove();   
//                 }

//                 tr.appendChild(tdNo);
//                 tr.appendChild(tdImage);
//                 tr.appendChild(tdName);
//                 tr.appendChild(tdSize);
//                 tr.appendChild(tdDelete);
//                 table.lastElementChild.appendChild(tr);
//                 table.classList.remove('d-none');
//             }
//             reader.readAsDataURL(file);
//         });
//     }
//     document.querySelector('.fa-trash-alt').onclick = function()
//     {
//         [...table.lastElementChild.children].forEach(td => td.remove())
//         table.classList.add('d-none');
//         count = 0;
//     }
// }


